const Data = [
  {
    id: "introduction",
    title: "프로젝트 소개🏆",
    subtitle1: "우리의 프로젝트는",
    subtitle2: "주요 분석 소개",
    subtitle3: "기대 효과",
    content:
      "(LLM-RAG)기반 AI모델을 활용하여 국민 생애 직업주기에 맞춘 교육을 추천하고 관리하는 서비스를 제공하였습니다. 사용자에게 적합한 교육을 추천하는 챗봇서비스와 이용자의 꿈과 직업 설계에 도움을 줄 수 있는 AI상담서비스, 감성분석 및 다목적의사결정 알고리즘을 통한 이용자의 효과적인 선택, 이를 토대로 교육기관의 부실 위험도를 판단하여 교육의 향상을 성취하고자 했습니다. 이를 통해 미취업자의 애로를 해결하고 생애에 직업이 필요한 이들의 활로를 열어 결과적으로 국가가 양질의 교육을 제공하며 교육을 받은 국민이 양질의 노동력을 제공하는 선순환의 구조를 구축한다는 목표로 해당 프로젝트를 시작하게 되었습니다.",
    content2:
      "국가교육지원 기반 훈련과정의 평균적인 질적 향상을 도모하고 이를 통해 해당 정책에 활기를 불어넣으며 더 나아가 노동력과 교육의 긍정적인 비례 관계의 중요성을 고취하고자 하였습니다",
    content3: "섹션 1-2 내용",
    list: [
      {
        title: "1. 직무능력 기반 AI 생애 커리어 설계",
        content:
          "한국산업인력공단의 '직무능력은행' 서비스 내 직무능력계좌 파일에 관한 개인 이력을  LLM-RAG 기반 AI모델을 통한 분석 및 직업능력개발훈련과 연계해 이용자의 강점, 적합한 직업, 필요한 직무능력을 상담하여 커리어 설계를 도움"
      },
      {
        title: "2. 수강자 반응 데이터 기반 훈련추천",
        content:
          "BERT 언어모델을 이용한 NLP를 통해 수강생의 취업률, 평균 만족도, 수강후기에 관한 감성분석 및 다목적의사결정 알고리즘에 기반한 빅데이터를 구축 및 분석을 통해 양질의 교육과정에 대한 추천의 정량적 근거 제공"
      },
      {
        title: "3. 직업훈련기관 운영 모니터링",
        content:
          "구축한 빅데이터 분석 기반 관리자 기능을 제공하여 직업훈련포털 내 교육기관과 훈련과정 전수에 관한 총괄 모니터링 및 관리에 도움을 줄 수 있는 서비스 제공"
      }
    ]
  },

  {
    id: "developement",
    title: "프로젝트 설계 내용💻",
    subtitle1: "저는 프로젝트에서 ",
    subtitle2: "Springboot,sql에서 주요 설계는",
    subtitle3: "AI모델 파이프라인에서 주요 설계는",
    content:
      "springboot를 사용한 백엔드 개발,유지보수 및 160000여개의 크롤링 및 학습모델 결과 데이터를 핸들링 하였습니다. 또한 BERT모델 NLP 설계, LLM-RAG기반 AI모델 파이프라인 개설 및 데이터 입출력과 서버관리 및 MVC 전반의 트러블 슈팅의 중추를 담당하였습니다. 마지막으로 GCP에 docker를 통해 CD구축, googlestorge와 sql를 연결, NGINX,certbot,docker를 연결하여 최종적인 도메인 서비스 개설하였습니다. 서로의 자리에서 최선을 다하고 함께 배워가며 서로의 코드를 github를 통해 활발히 공유함으로써 프로젝트의 장애물에 서로의 돌파구가 되어주는 3명의 팀원과 함께한 4명의 드림팀으로 첫 프로젝트를 성공적으로 마치게 되었습니다. 다음으로 여러 설계 속 주요 부분을 간략히 설명하고 일부는 코드와 함께 리뷰하겠습니다.",
    content2:
      "데이터 색인 및 재가공을 위한 sorting. 및 데이터 entity별 로직 처리의 획일화. 검색 최적화 및 sql 프로시저와 트리거를 통한 데이터 재가공 자동화 ",
    content3:
      "사용자 반응 요약 및 분석을 통한 데이터 수집 및 표출을 위한 nlp. AI모델 sql을 통해 데이터관리. file로더와 chatbot 연결 AI상담을 위한 파이프라인 및 프롬프트 설계. 다목적의사결정 알고리즘",
    list1: [
      {
        title: "Foreign Key & entity",
        content:
          "Foreign key를 이용한 데이터 무결성 강화. 서브 테이블 데이터 혼재의 획일화를 통해 핸들링. entity 설계를 통해 데이터베이스와의 원활한 소통에 중점을 둠"
      },
      {
        title: "JPA @query sorting",
        content:
          "데이터를 검색 및 재생산하는 서비스로서 데이터 테이블 관리에 초점을 두어 설계함 그 예시로 jpa nativeQuery를 각 entity 리스트에 맞게 사용함으로써 검색 관련 로직을 서비스의 목적에 맞게 세분화 및 설계를 통한 데이터의 합일성 추구"
      },
      {
        title: "google storge 연결",
        content:
          "GCP의 클라우드storage로 변환을 통한 탈 로컬화. 클라우드의 스토리지 기능을 백엔드의 로직에 넣어 사용자가 이용할 수 있는 파일로더 구현"
      }
    ],
    list2: [
      {
        title: "Bert model을 활용한 NLP",
        content:
          "Bert를 통해 토큰화된 단어들로 팀원이 훈련시킨 모델을 로드하여 중요도 평가 후 감성분석 실행 및 AI 요약 방향 제시"
      },
      {
        title: "데이터베이스와 AI모델 연결",
        content:
          "sqlalchemy를 사용하여 AI모델에서 나온 결과를 데이터베이스에 저장. 각 데이터들은 색인처리 후 정립한 테이블안으로 입력 "
      },
      {
        title: "프롬프트 및 AI상담 파이프라인 설계",
        content:
          "2024년 상반기에 출시한 gemma2:9b를 사용하여 상담결과를 차출 RAG을 활용한 프롬프트 작성 및 BERT로 차출된 중요 문장을 vectorDB에서 관련 정보를 huggingface 오픈 소스인 jhgan/ko-sroberta-nli 한국어 사전학습모델을 통해 유사도 검색 후 해당 AI에 입력. fastAPI로  프론트 전달"
      },
      {
        title: "다목적 의사결정 알고리즘 설계",
        content:
          "skyline-query 및 TOPSIS 알고리즘을 이용한 최적,최악값을 차출하여 위험도 분석 및 랭킹 시스템. 다목적 의사결정 알고리즘은 사용자의 선호도에 적합한 대상을 찾는 서비스를 제공하는데 이를 교육 추천서비스에 도입 및 해당 축을 뒤집어 위험도 판단 근거로 제출"
      }
    ]
  },

  {
    id: "turn",
    title: "위기와 극복🎢",
    subtitle1: "Cloud Service Deployment 독학으로 극복하다",
    subtitle3: "",
    content1:
      "그동안 로컬네트워크를 통해 서비스의 오류들을 잡아내고 수정하는 것을 극복하고 난 이후 최대의 위기는 공모전에서의 1차합격 이후 최종 합격을 위한 서비스 개설이었습니다. 클라우드 서비스와 배포에 대해 배움이 없었던 상황이었지만 백엔드로서 프로젝트의 유종의 미를 위해 2주간의 많은 실패를 겪으며 배움의 길을 홀로 나섰습니다. 그 결과 GCP를 활용한 클라우드 서비스를 구축할 수 있게 되었으며,docker를 통해 최적화된 배포를 진행할 수 있게 되었습니다. 프로젝트의 배포과정을 소개하겠습니다.",
    list: [
      {
        title: "docker-compose up",
        content:
          "docker를 이용한 이미지화를 통해 운영체제의 변경에도 쉽고 빠르게 생태계를 구축. 이를 docker-compose로 각 컨테이너를 연결하여 최적화된 배포 시행"
      },
      {
        title: "nginx 포트포워딩 및 domain을 가져보다 ",
        content:
          "nginx를 사용하여 각 포트의 연결 및 certbot인증자동화 sh를 사용하여 GCP에서 구매한 도메인에 서비스를 연결"
      }
    ]
  },
  {
    id: "conclusion",
    title: "소감 및 이후✨",
    subtitle1: "프로젝트를 마치며",
    subtitle2: "프로젝트의 정리 및 다음 여정",
    content: `첫 프로젝트의 성공은 다시금 새로운 역량을 확인하기 위한 도전의 발판이 되었습니다. 비교적 학문의 출발이 늦은 우리와 전국의 개발자분들과 겨루어 성과를 예상하지 못했지만 그 예상을 깨고 장려상이라는 큰 쾌거를 이루었습니다. 첫 프로젝트를 마치면서 새로운 프로젝트에 대한 아이디어가 번뜩이는 동시에 적립되어지는 열기는 앞으로의 길을 조금이나마 비추어줍니다. 성공이 무색하게 우리는 또 실패를 거듭합니다. 그러한 것은 실패보다는 발전이라고 이야기하고 싶습니다. 도전하기에 나아갑니다. 나아가기에 우리는 원하는 것을 쌓아갈 수 있습니다. 저는 느리지만 전진하는 걸음에 담긴 힘을 믿습니다. 앞으로 다양한 환경에서 멋진 프로젝트를 여러분과 함께하고 싶습니다.`,
    content2:
      "프로젝트가 끝나고 해당 파일들이 어느 로컬에서도 돌아갈 수 있도록 docker를 빌드하는 중입니다. 클라우드 서비스는 현재 요금 문제로 삭제하였으며 저희의 여정이 마침표를 찍게되었습니다. 다음 프로젝트에 대한 아이디어를 구상 중에 있으며 함께할 사람을 찾고 있습니다."
  }
];

export {Data};
