/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Choe Ingyu",
  greeting: "안녕하세요.",
  intro:'사색과 몰두를 즐기며 둔부가 무거운',
  myname:'최인규입니다.',
  subTitle:
    "A passionate Full Stack SW Developer🚀 ",
  
  subTitle2: 'Web 백엔드 개발(java), LLM-RAG 기반 Ai 서비스, objectdetection 커스텀데이터 셋 학습 모델 구축, GCP를 활용한 클라우드 서비스 구축. 다양한 활동으로 개발이력을 쌓아 왔습니다. 백엔드 web개발자, AI 개발자가 되기 위해 열정과 배움으로 나아갑니다.',
  subTitle3: "'함께'라는 가치를 알고 서로가 유기체적으로 얽히며 나아가는 세상을 꿈꿉니다. 여러 학문을 배우며 넓혀진 시야로 목표를 관철합니다. 서비스 개발에 있어 새로운 인사이트를 가져올 수 있는 인재, 맡은 일에 사명을 다하는 인재가 되겠습니다.",
  subTitle4: "인과연이 스칠 때마다 배움의 발자취를 남깁니다. 깊게 딛어 움푹한 자국들이 모여 지식의 깊이를 가늠합니다. 느릴지언정 전진을 멈춘 적은 없습니다. 이제 달리는 법을 깨치려 합니다.",
  resumeLink:
    "https://drive.google.com/file/d/1PkCDP2njvagGZboDFblCqjXKUlXvxlue/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/POSIO-IN9",
  gmail: "los.oplia@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "프로그래밍 스킬",
  subTitle: "학습 및 가능한 프로그래밍 스킬",
  skills: [
    {
      id:1,
      skill:"frontend{js,react}",
      content:"React,tailwind를 사용하여 js에서의 신속한 동적 웹 스타일링 구성.구성별 컨포넌트화 관리. fetch와 axios등을 통해 백엔드 연동 함수 구현. api로 전달받은 데이터를 hook,state,recoil등을 이용한 js 동적 로직 구현."
    },
    {
      id:2,
      skill:"backend{java,boot,sql}",
      content:"java 객체지향 자료구조 Comparable,Comparator를 이용한 탐색, stqck과 q를 이용한 데이터 보관 및 차출 관련 알고리즘,이진트리에 기반한 힙정렬을 통해 효율적인 자료 탐색 구조 알고리즘 구현. boot의 웹 백엔드 서비스 구축. mvc 패턴을 통해 jpa로 데이터베이스와의 객체 간 맵핑을 처리. 에러 및 반응을 모듈화시켜 오류처리 강화. colume 10개이상의 16000여개의 크롤링 데이터 및 여타 ai 분석 결과를 포함한 빅데이터 색인 및 다이어그램 설정. 이후 정렬,탐색,업로드등 관련 Restfull Api를 설계하여 프론트와의 데이터 통신."
    },
    {
      id:3,
      skill:"Ai-modeling{python,pytorch}",
      content:"pandas라이브러리 활용한 데이터셋 전처리 및 radomforest를 통한 분류학습. LLM-RAG 기반 ai챗봇모델 파이프라인 설계 및 서비스 구축. 다국적언어모델(bert)를 이용한 NLP 감성분석 파이프라인 설계. 시계열 데이터를 활용한 LSTM 시험 모델 구축, yolo8을 활용한 커스텀 데이터 obectdetection 시험 모델 구축. 모델과 백엔드와의 파이프라인 설계. skyline-query, topsis(다목적의사결정) 알고리즘 작성을 통해 위험도 분석 서비스."
    },
    {
      id:4,
      skill:"cloud-service{Gcp,docker}",
      content:"Gcp 구글 클라우드를 통해 sql과 google-storage를 서비스에 연결. docker를 사용하여 node.js기반 npm build 이미지화, gradle kts기반 bootjar 이미지화로 서비스 배포. docker-compose를 통한 관리. sh를 통해 ai모델의 빌드를 자동화 및 cerbot을 이용한 domain 인증서 자동화. nginx를 통해 도메인 프록시 연결. vm머신 ssh를 통해 linux환경에서 작업."
    }      
    ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
      
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "계명대학교",
      logo: require("./assets/images/knu.png"),
      subHeader: "경영학, 국문학 전공",
      duration: "2017 03 - 2023 02",
      desc: "비즈니스 모델 및 서비스에 관한 이해도, 언어의 활용 및 구조분석, 논리적 사고를 함양하여 광범위한 시야를 통해 인사이트를 제시 ",
      descBullets: [
        "효율과 실용의 학문, 탐구와 분석의 학문을 섭렵함으로써 새로운 길을 걸어가겠습니다.",
        "개발 관련 학사가 아닌 비전공으로서 새로운 시야를 가지고 임하는 사람, 앞으로 전공자와 실력을 견줄 만한 개발자가 되겠습니다."
      ]
    },
    {
      schoolName: "부산대학교 산학협력단",
      logo: require("./assets/images/pnu.png"),
      subHeader: "AI활용 빅데이터 분석 풀스택 웹서비스 SW 개발자 양성과정",
      duration: "2024 02 - 2024 07",
      desc: "자료구조 및 코드구조에 관한 학문적인 접근을 기초로 단계적으로 실용적인 개발을 배우며 성장함. 개발자의 기본적인 지식과 자세를 가짐",
      descBullets: ["부산대학교 홍봉희 지도교수님의 가르침 아래서 짦은 시간이지만 역력한 개발 실력을 쌓을 수 있었습니다.",
        "과정 및 개인 학습을 바탕한 프로젝트를 성공적으로 서비스하여 멋진 결과를 얻게 되었습니다. 열정과 실력을 겸비한 인재가 되겠습니다."
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects💻",
  subtitle: "고용노동부 제3회 공공데이터 활용 공모전 서비스 개발 부문 장려상",
  projects: [
    {
      image: require("./assets/images/pjimg.png"),
      projectName: "AI직무능력나침판",
      projectDesc: "LLM-LAG기반 AI를 활용한 국민 생애 직업주기에 맞춘 교육 추천,상담 및 교육기관 관리",
      projectsubtitle: "맡은 부분: 백엔드 및 AI모델 파이프라인, AI모델 구축 보조, 서비스 배포",
      footerLink: [
        {
          name: "시연영상",
          url: "https://drive.google.com/file/d/1y6XnzBxHDg_ZNoinituEq-aKJU_z54FW/view?usp=drive_link"
        },
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/defaultimg.png"),
//       imageAlt: "Google Code-In Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/defaultimg.png"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/defaultimg.png"),
//       imageAlt: "PWA Logo",
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "안녕하세요 개발자(진) 최인규입니다",
  number: "+92-0000000000",
  email_address: "los.oplia@gmail.com"
};

// Twitter Section

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  openSource,
  bigProjects,
  // achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
