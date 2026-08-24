export type CareerType = 'job' | 'internship' | 'project' | 'experience' | 'education' | 'degree';

export interface CareerItem {
  type: CareerType;
  title: string;
  subtitle: string;
  date: string; // YYYY 또는 YYYY.MM (정렬용)
  displayDate?: string; // 화면 표시용 (자유로운 형식)
  ongoing?: boolean;
  link?: string;
  description?: string;
}


export const career: CareerItem[] = [
  // 직장
  {
    type: 'internship',
    title: '디지포레',
    subtitle: '웹 개발자 인턴',
    date: '2026.02',
    displayDate: '01월 ~ 02월',
    description: '이미지 3D 데이터 추출 모델 및 웹 메시 에디터 개발.',
  },
  {
    type: 'internship',
    title: '다비치안경체인',
    subtitle: 'AI 엔지니어 인턴',
    date: '2026.01',
    displayDate: '2025년 10월 ~ 2026년 01월',
    description: '가맹점 대상 문의 챗봇 개발',
  },

  // 프로젝트
  {
    type: 'project',
    title: '알고한끼',
    subtitle: 'product developer',
    date: '2026.07',
    displayDate: '2026년 07월 ~',
    ongoing: true,
    description: '만성질환자 대상 맞춤형 정보 제공을 통하여 외식 불안감 해소 및 여행 만족도 향상을 위한 서비스',
  },
  // {
  //   type: 'project',
  //   title: 'B-redict',
  //   subtitle: 'AI 파이프라인 개발 및 데이터 시각화',
  //   date: '2025.01',
  //   displayDate: '2025년 01월',
  //   description: '코사인 유사도와 LLM 두 방식을 비교하는 비트코인 가격 예측 서비스. 토큰 사용량 70% 절감, 응답 시간 50% 단축.',
  // },
  // {
  //   type: 'project',
  //   title: 'WEEBEE QUIZ',
  //   subtitle: 'AI, Data, DevOps, Frontend',
  //   date: '2025.06',
  //   displayDate: '2025년 04월 ~ 2025년 06월',
  //   description: '수상 내역 적기.',
  // },

  // 대외 활동
  {
    type: 'experience',
    title: 'ICCC 2024 국제 학술대회',
    subtitle: '논문 발표',
    date: '2024.12',
    displayDate: '2024년 12월 17일 ~ 2024년 12월 19일',
    description: 'ML-assisted Channel Estimation with Real Channel Measurement using USRP',
  },
  {
    type: 'experience',
    title: '산학연구원 학부 연구생',
    subtitle: '상명대학교',
    date: '2024.12',
    displayDate: '2025년 046 ~ 2025년 12월',
    description: '연구 과제 참여, 모델 학습 데이터 수집 및 MATLAB 분석 수행. ICCC 2024 발표.',
  },
  {
    type: 'experience',
    title: 'Google Developer Student Clubs',
    subtitle: 'Core (DevRel)',
    date: '2023.10',
    displayDate: '2023년 10월 ~ 2024년 08월',
    description: '개발자 동아리 운영 및 스터디 관리',
  },
  {
    type: 'experience',
    title: 'SW AI 늘봄 교육 강사',
    subtitle: '방과후 AI 교사 (동문초, 온양신정초)',
    date: '2024.08',
    displayDate: '2023년 10월 ~ 2024년 08월',
  },
  {
    type: 'experience',
    title: '디지털 새싹 SW AI 보조강사 ',
    subtitle: 'AI 코딩 교육 보조',
    date: '2023.02',
    displayDate: '2023년 01월 ~ 2023년 02월',
  },

  // 교육
  {
    type: 'education',
    title: 'Tableau Bootcamp 고급편 8기 ',
    subtitle: 'Tableau',
    date: '2026.03',
    displayDate: '2026년 02월 ~ 2026년 03월',
  },
  {
    type: 'education',
    title: 'Tableau Bootcamp 29기 ',
    subtitle: 'Tableau',
    date: '2025.10',
    displayDate: '2025년 10월',  
  },
  {
    type: 'education',
    title: '우리FISA 4기 (우리 FIS 아카데미)',
    subtitle: 'AI 엔지니어링 과정',
    date: '2025.06',
    displayDate: '2024년 12월 ~ 2025년 06월',
    description: 'AI 서비스 기획부터 구현, 운영까지 다루는 과정 수료. 최종 프로젝트 WeeBee Quiz로 우수상 수상.',
  },
  {
    type: 'education',
    title: '디지털 인재 육성 프로그램',
    subtitle: '블루문드림',
    date: '2024.08',
    displayDate: '2024년 04월 ~ 2024년 08월',
    description: 'AI 인재 양성 프로그램 참여 및 기업 연계 프로젝트 진행',
  },
  {
    type: 'education',
    title: 'LG Aimers 4기',
    subtitle: 'LG AI 연구원',
    date: '2024.02',
    displayDate: '2024년 01월 ~ 2024년 02월',
    description: 'LG AI 연구원 AI 전문가 과정 수료, 해커톤 참여.',
  },

  // 학위
  {
    type: 'degree',
    title: '상명대학교',
    subtitle: '스마트정보통신공학과 졸업',
    date: '2025.02',
    displayDate: '2019년 03월 ~ 2025년 02월',
  },
];
