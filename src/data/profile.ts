export interface SocialLink {
  label: string;
  url: string;
}

export const profile = {
  name: '박혁준',
  englishName: 'Park Hyukjun',
  role: 'AI 엔지니어',
  location: '서울, 대한민국',
  email: 'hyukjun1106@gmail.com',
  tagline:
    '사용자의 문제를 코드로 풀어내는 개발자입니다. \n사람처럼 자연스럽게 반응하는 AI 서비스를 만듭니다.',
  intro: [
    '안녕하세요! 신입 AI 엔지니어 박혁준입니다.',
    'Python, TypeScript, LangChain 등으로 LLM 기반 서비스를 설계하고 개발하여, 사용자가 자연스럽게 대화하듯 답을 얻을 수 있는 AI를 만듭니다.',
    '데이터 분석에도 관심이 많아, 기능 개발 전후로 로그와 사용 패턴을 확인하며 서비스를 다듬는 걸 좋아합니다. Tableau와 GA로 이 관심을 계속 넓혀가고 있습니다.',
    '새로운 기술을 배우면 바로 구현해서 붙여보고, 실제로 어떤 효과를 내는지 확인하는 걸 좋아합니다.',
  ],
  coreSkills: ['Python', 'FastAPI', 'LangChain', 'React', 'SQL/NoSQL', 'Docker', 'AWS', 'ELK Stack', 'Veactor DB'],
  socials: [
    { label: 'GitHub', url: 'https://github.com/hyukjunmon' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/hyukjunmon/' },
    // { label: 'Blog', url: '#' },
  ] as SocialLink[],
};
