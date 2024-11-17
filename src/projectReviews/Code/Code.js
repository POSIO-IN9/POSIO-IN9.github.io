const code01 = {
  id: 1,
  title: "jpaRepository 중 교육기관 별 수치화 데이터 sorting ",
  string: `import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import edu.pnu.domain.Edu_list;


public interface ListRepository extends JpaRepository<Edu_list, Long>{
    @Query(value="SELECT f.* FROM job2.maindata f WHERE SUBSTRING(f.ncs_num, 1, 6) = :codePart", nativeQuery=true)
    List<Edu_list> findByNcsCodeFirstSix(@Param("codePart") String codePart);

    @Query(value="SELECT * FROM job2.maindata n WHERE n.starrating <> '0' and SUBSTRING(n.ncs_num, 1, 6) = :codePart ORDER BY n.starrating DESC", nativeQuery=true)
    List<Edu_list> findByNcsCodeFirstSixSortByRating(@Param("codePart") String codePart);

    @Query(value = "SELECT f.* " +
            "FROM job2.maindata f " +
            "JOIN job2.summary_review s ON f.course_id = s.course_id " +
            "WHERE SUBSTRING(f.ncs_num, 1, 6) = :codePart " +
            "ORDER BY s.ps IS NULL, s.ps DESC",
            nativeQuery = true)
    List<Edu_list> findByNcsCodeFirstSixSortByPs(@Param("codePart") String codePart);
`,
  lang: "java"
};

const code02 = {
  id: 2,
  title: "googlestorage 파일 업로드 중 일부",
  string: `public class AccountFileUtil {

	@Value("#{spring.cloud.gcp.storage.bucket}")
	private String bucketName;

	private Storage storage;

	@PostConstruct
	public void init() {
		storage = StorageOptions.getDefaultInstance().getService();
		log.info("Google Cloud Storage bucket: {}", bucketName);
	}

	public List<String> saveFiles(@RequestPart("files") List<MultipartFile> files) throws RuntimeException {
		if (files == null || files.isEmpty()) {
			return List.of();
		}
		List<String> uploadNames = new ArrayList<>();
		for (MultipartFile multipartFile : files) {
			String originalFilename = multipartFile.getOriginalFilename();
			if (originalFilename == null) {
				continue;
			}

			String uniqueFilename = UUID.randomUUID() + "_" + originalFilename;
			BlobId blobId = BlobId.of(bucketName, uniqueFilename);
			BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();

			try {
				storage.create(blobInfo, multipartFile.getBytes());
				uploadNames.add(uniqueFilename);
				log.info("File saved to GCS: {}", uniqueFilename);
			} catch (IOException e) {
				throw new RuntimeException(e.getMessage());
			}
		}
		return uploadNames;
	}
`,
  lang: "java"
};
const code03 = {
  id: 3,
  title: "리뷰요약 프로세서 중 AI모델 입출력 결과 데이터 입력 수행 파트",
  string: `def process_summaries():
    print("요약시작")
    last_processed = session.query(SummaryReview.course_id).order_by(SummaryReview.course_id.desc()).first()
    last_processed_id = last_processed if last_processed else None

    query = session.query(FinalData)
    if last_processed_id:
        query = query.filter(FinalData.course_id > last_processed_id)
    courses = query.all()

    for course in courses:
        reviews_text = course.reviews
        if reviews_text.strip() == "{}":
            summary_result = SummaryReview(
                course_name=course.course_name,
                course_id=course.course_id,
                summary_review='수강후기가 없습니다.'
            )
        else:
            try:
                allreview = parse_review3(reviews_text)
                print("AI에 input될 문장: ", allreview)
                if not allreview:
                    summary_result = SummaryReview(
                        course_name=course.course_name,
                        course_id=course.course_id,
                        summary_review='수강후기가 없습니다.'
                    )
                else:
                    response = chain.invoke({"Sentence": allreview})
                    print("AI의 답변: ", response)
                    summary_result = SummaryReview(
                        course_name=course.course_name,
                        course_id=course.course_id,
                        summary_review=response
                    )
            except Exception as e:
                print("에러 발생:", str(e))
                summary_result = SummaryReview(
                    course_name=course.course_name,
                    course_id=course.course_id,
                    summary_review='수강후기가 없습니다.'
                )
        session.add(summary_result)
        session.commit()
    print("요약 처리 완료!")
`,
  lang: "python"
};
const code04 = {
  id: 3,
  title: "AI상담 챗봇 프로세서 중 유사도 검색 및 프롬프트 입력 부분",
  string: `def load_vector_store():
    start_time = time.time()
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    print('GPU로드', device)
    # print('Current cuda device:', torch.cuda.current_device())
    print('Count of using GPUs:', torch.cuda.device_count())
    print(torch.cuda.is_available())
  
    print("직능계 벡터 스토어 로드를 시작합니다...")
    embeddings_model = HuggingFaceEmbeddings(
    model_name='jhgan/ko-sroberta-nli',
    model_kwargs={'device':device},
    encode_kwargs={'normalize_embeddings':True},
    )
    db = Chroma(
        collection_name='combined_output',
        persist_directory='./db_job/chromadb',
        embedding_function= embeddings_model
    )
    print(f"직능계 벡터 스토어 로드 완료. 소요 시간: {time.time() - start_time:.2f} 초")

    return db

def chatbot_j(input):
    vector_store_instance = load_vector_store()
    model = ChatOllama(model='gemma2:9b', temperature=0)

    # 프롬프트 설정
    template = '''
    ---{생략}---
    : {context}
    질문: 
    {question}
    '''
    template1 = '''
    --{생략}--
    : 
    질문: 
    {question}
    '''
    prompt = ChatPromptTemplate.from_template(template)
    prompt1 = ChatPromptTemplate.from_template(template1)

    retriever = vector_store_instance.as_retriever()

    def format_docs(docs):
        return .join(doc.page_content for doc in docs)

    rag_chain = (
        {'context': retriever | format_docs, 'question': RunnablePassthrough()}
        | prompt
        | model
        | StrOutputParser()
    )
     rag_chain2 = (
      {'context1': rag_chain, 'question': RunnablePassthrough()}
        | prompt1
        | model
        | StrOutputParser()
    )
    output = rag_chain.invoke(input) 
    output2  = rag_chain2.invoke(input)
    output=[output1,output2]

    return output
`,
  lang: "python"
};
const code05 = {
  id: 5,
  title: "docker-compose",
  string: `name: Ai_job_compass

services:
  flask:
    image: superattraction/hrd:flask  
    container_name: sa_flask  
    ports:
      - "5000:5000"  
    environment:
      - FLASK_ENV=development  
    volumes:
      - ./flask_deploy:/flask_deploy
    command: ["bash", "-c", "source /opt/conda/etc/profile.d/conda.sh && conda activate superat && gunicorn -b 0.0.0.0:5000 --timeout 180 compass:app"]
    networks:
      - ai_job_network
    

  frontend:
    image: superattraction/hrd:front
    container_name: sa_front 
    restart: always  
    ports:
      - "3000:3000"  
    command: ["nginx", "-g", "daemon off;"]
    networks:
      - ai_job_network

  backend:
    image: superattraction/hrd:spring
    container_name: sa_spring  
    restart: always  
    ports:
      - "8080:8080" 
    command: ["java", "-jar", "/app.jar"]
    networks:
      - ai_job_network
      
networks:
  ai_job_network:
    driver: bridge
`,
  lang: "yml"
};
const code06 = {
  id: 6,
  title: "nginx.conf",
  string: `
server {
    listen 80;
    server_name moelcompass.com;

    location /.well-known/acme-challenge/ {
        allow all;
        root /var/www/certbot;
    }

    location / {
        if ($scheme = http) {
            return 301 https://$host$request_uri;
    }
    }
}

server {
    listen 443 ssl;
    server_name moelcompass.com;

    ssl_certificate /etc/letsencrypt/live/moelcompass.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/moelcompass.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.html;
        try_files $uri $uri/ /index.html;
    }
    location /api/ {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_pass --%;
    }
    location /flask/ {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_pass --%;
    }
}
`,
  lang: "conf"
};
export {code01, code02, code03, code04, code05, code06};
