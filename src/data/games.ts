import type { Game } from '../types';

export const games: Game[] = [
  // {
  //   id: 'euron-quiz',
  //   title: 'Euron 퀴즈',
  //   description: '',
  //   kind: 'quiz',
  //   rules: [
  //     '각 질문은 순서대로 진행됩니다.',
  //     '팀은 오프라인에서 답을 작성하세요.',
  //     '정답 공개는 호스트가 Reveal 버튼을 눌러 진행합니다.'
  //   ],
  //   scoreIncrement: 1,
  //   questions: [
  //     {
  //       id: 'euron-quiz-1',
  //       prompt: 'Euron의 지도 교수님 성함은 무엇일까?',
  //       answer: '심재형 교수님'
  //     },
  //     {
  //       id: 'euron-quiz-2',
  //       prompt: 'Euron의 세션들을 모두 적으시오.',
  //       answer: 'Machine Learning (ML), Deep Learning (DL), Research'
  //     },
  //     {
  //       id: 'euron-quiz-3',
  //       prompt: '유런 의미',
  //       answer: 'Neuron + Networking / You Run / 앞을 향해 달려나가자는 “You Run”'
  //     },
  //     {
  //       id: 'euron-quiz-4',
  //       prompt: 'Euron 시작된 연도는?',
  //       answer: '2021년 2월 14일'
  //     },
  //     {
  //       id: 'euron-quiz-5',
  //       prompt: 'Euron 운영진 팀명을 모두 적어주세요 (총 7팀)',
  //       answer: '회장, 부회장, 홍보, 전체운영, ML, DL, Research'
  //     },
  //     {
  //       id: 'euron-quiz-6',
  //       prompt: '메인 스폰서십',
  //       answer: 'codeit'
  //     },
  //     {
  //       id: 'euron-quiz-7',
  //       prompt: '소통 창구 4개',
  //       answer: '디스코드, 카카오톡, 네이버 카페, 깃허브'
  //     }
  //   ]
  // },
  {
    id: 'gwan-sang',
    title: '관상 퀴즈',
    description: '',
    kind: 'choice',
    rules: [
      'A/B 선택형 문제입니다.',
      '답은 현장에서 선택한 후 공개합니다.',
    ],
    scoreIncrement: 1,
    questions: [
      {
        id: 'gwan-sang-1',
        prompt: '이 사람이 사용하는 운영체제는?',
        answer: 'WINDOW',
        choices: ['WINDOW', 'MAC'],
        type: 'choice'
      },
      {
        id: 'gwan-sang-2',
        prompt: '이 사람이 집순이인가?',
        answer: 'YES',
        choices: ['YES', 'NO'],
        type: 'choice'
      },
      {
        id: 'gwan-sang-3',
        prompt: '이 사람이 더 선호하는 영화 장르는?',
        answer: '로맨스',
        choices: ['로맨스', '공포'],
        type: 'choice'
      },
      {
        id: 'gwan-sang-4',
        prompt: '이 사람이 더 좋아하는 음식은?',
        answer: '마라탕',
        choices: ['마라탕', '떡볶이'],
        type: 'choice'
      },
      {
        id: 'gwan-sang-5',
        prompt: '이 사람은 복수 전공을 하고 있을까요? (예정이어도 YES)',
        answer: 'YES',
        choices: ['YES', 'NO'],
        type: 'choice'
      },
      {
        id: 'gwan-sang-6',
        prompt: '이 사람의 음악 취향은?',
        answer: 'KPOP',
        choices: ['KPOP', '밴드'],
        type: 'choice'
      },
      {
        id: 'gwan-sang-7',
        prompt: '이 사람이 좋아할 것 같은 반려동물은?',
        answer: '강아지',
        choices: ['강아지', '고양이'],
        type: 'choice'
      },
      {
        id: 'gwan-sang-8',
        prompt: '이 사람이 좋아할 것 같은 계절은?',
        answer: '여름',
        choices: ['여름', '겨울'],
        type: 'choice'
      },
      {
        id: 'gwan-sang-9',
        prompt: '이 사람의 여행 스타일은?',
        answer: '휴양',
        choices: ['휴양', '관광'],
        type: 'choice'
      },
      {
        id: 'gwan-sang-10',
        prompt: '이 사람의 MBTI는 무엇으로 시작할까요?',
        answer: 'E',
        choices: ['E', 'I'],
        type: 'choice'
      }
    ]
  },
  {
    id: 'song-quiz',
    title: '노래 퀴즈',
    description: '연도별',
    kind: 'song',
    rules: [
      '노래를 잘 듣고 맞춰보세요!',
      '*짧게 들려줌 주의',
    ],
    scoreIncrement: 1,
    questions: [
      { id: 'song-1', prompt: '2010년대 Round 1', answer: 'Placeholder song answer 1'},
      { id: 'song-2', prompt: '2010년대 Round 2', answer: 'Placeholder song answer 2' },
      { id: 'song-3', prompt: '2010년대 Round 3', answer: 'Placeholder song answer 3' },
      { id: 'song-4', prompt: '2010년대 Round 4', answer: 'Placeholder song answer 4' },
      { id: 'song-5', prompt: '2010년대 Round 5', answer: 'Placeholder song answer 5' },
      { id: 'song-6', prompt: '2020년대 Round 1', answer: 'Placeholder song answer 6' },
      { id: 'song-7', prompt: '2020년대 Round 2', answer: 'Placeholder song answer 7' },
      { id: 'song-8', prompt: '2020년대 Round 3', answer: 'Placeholder song answer 8'},
      { id: 'song-9', prompt: '2020년대 Round 4', answer: 'Placeholder song answer 9' },
      { id: 'song-10', prompt: '2020년대 Round 5', answer: 'Placeholder song answer 10' }
    ]
  },
  {
    id: 'tech-logo',
    title: '로고 퀴즈',
    description: '로고를 보고 무엇인지 맞춰봐요.',
    kind: 'logo',
    rules: [
      '로고를 보고 브랜드를 맞히세요.',
      '답은 Reveal 버튼을 눌러 공개합니다.',
      '이미지는 문제 페이지에서 바로 표시됩니다.'
    ],
    scoreIncrement: 1,
    questions: [
      { id: 'logo-swift', prompt: 'Swift', answer: 'Swift', logo: '/logos/swift.png', type: 'logo' },
      { id: 'logo-kotlin', prompt: 'Kotlin', answer: 'Kotlin', logo: '/logos/kotlin.png', type: 'logo' },
      { id: 'logo-matlab', prompt: 'Matlab', answer: 'Matlab', logo: '/logos/matlab.png', type: 'logo' },
      { id: 'logo-scala', prompt: 'Scala', answer: 'Scala', logo: '/logos/scala.png', type: 'logo' },
      { id: 'logo-cursor-ai', prompt: 'Cursor AI', answer: 'Cursor AI', logo: '/logos/cursor.png', type: 'logo' },
      { id: 'logo-jasper-ai', prompt: 'Jasper AI', answer: 'Jasper AI', logo: '/logos/jasper.jpeg', type: 'logo' },
      { id: 'logo-copilot', prompt: 'Microsoft Copilot', answer: 'Microsoft Copilot', logo: '/logos/copilot.png', type: 'logo' },
      { id: 'logo-hugging-face', prompt: 'Hugging Face', answer: 'Hugging Face', logo: '/logos/huggingface.png', type: 'logo' },
      { id: 'logo-tensorflow', prompt: 'TensorFlow', answer: 'TensorFlow', logo: '/logos/tensorflow.png', type: 'logo' },
      { id: 'logo-pytorch', prompt: 'PyTorch', answer: 'PyTorch', logo: '/logos/pytorch.png', type: 'logo' },
      { id: 'logo-perplexity', prompt: 'Perplexity', answer: 'Perplexity', logo: '/logos/perplexity.webp', type: 'logo' },
      { id: 'logo-julia', prompt: 'Julia', answer: 'Julia', logo: '/logos/julia.png', type: 'logo' },
      { id: 'logo-llamaindex', prompt: 'LlamaIndex', answer: 'LlamaIndex', logo: '/logos/llamaindex.png', type: 'logo' }
    ]
  },
  {
    id: 'initial-consonant',
    title: '초성 게임',
    description: '초성을 보고 영화/드라마 제목을 맞춰줘.',
    kind: 'initial',
    rules: [
      '초성을 보고 영화/드라마 제목을 맞히세요.',
      '정답 공개는 Reveal 버튼을 사용합니다.',
      '정답은 호스트가 직접 확인해주세요.'
    ],
    scoreIncrement: 1,
    questions: [
      { id: 'initial-1', prompt: 'ㄱㅎㅈㅇ', answer: '극한직업' },
      { id: 'initial-2', prompt: 'ㄱㅅㅊ', answer: '기생충' },
      { id: 'initial-3', prompt: 'ㅅㄱㅎㄲ', answer: '신과함께' },
      { id: 'initial-4', prompt: 'ㅇㅁㄴㅍㄹㄷㄹㅇㄴㄷ', answer: '악마는 프라다를 입는다' },
      { id: 'initial-5', prompt: 'ㅇㄱㅅㄴㄴㅈ', answer: '왕과 사는 남자' },
      { id: 'initial-6', prompt: 'ㅇㅂㅇㅌㅇ', answer: '아바웃타임' },
      { id: 'initial-7', prompt: 'ㄷㄱㄹㄹ', answer: '더 글로리' },
      { id: 'initial-8', prompt: 'ㅅㅈㅇㄱㅌㅇ', answer: '선재업고튀어' },
      { id: 'initial-9', prompt: 'ㅅㅁㄷㅅㅅㅁㅎㄴ', answer: '스물다섯 스물하나' },
      { id: 'initial-10', prompt: 'ㅍㅆㅅㅇㅅㄷ', answer: '폭싹 속았수다' }
    ]
  },
  {
    id: 'bingo',
    title: '주제 빙고',
    description: '개발 관련 4x4 빙고를 종이에 작성하고 2줄 먼저 완성한 팀이 승리하는 게임.',
    kind: 'bingo',
    rules: [
      '4x4 빙고 카드를 종이에 작성하세요.',
      '진행자가 주제를 발표하면 해당 단어를 체크합니다.',
      '먼저 2줄을 완성한 팀이 승리합니다.',
      '1등 +5점, 2등 +3점은 점수 버튼으로 직접 지급하세요.'
    ],
    scoreIncrement: 0,
    customButtons: [
      { label: 'Team +5', value: 5, teamOnly: true },
      { label: 'Team +3', value: 3, teamOnly: true }
    ],
    questions: [
      {
        id: 'bingo-1',
        prompt: '',
        answer: '1등 +5점, 2등 +3점. 점수 버튼으로 직접 지급하세요.'
      }
    ]
  },
  {
    id: 'relay-drawing',
    title: '릴레이 그림 그리기',
    description: '속담을 보고 5초씩 릴레이로 그림을 그립니다.',
    kind: 'relay',
    rules: [
      '문제를 맞힐 사람 1명을 정하세요.',
      '맞힐 사람은 뒤돌아선 상태로 기다립니다.',
      '나머지 팀원은 5초씩 돌아가며 그림을 이어서 그립니다.',
      '그림이 끝난 뒤 맞힐 사람이 정답을 맞히면 됩니다.'
    ],
    scoreIncrement: 3,
    timerSeconds: 5,
    questions: [
      { id: 'relay-1', type: 'relay', prompt: '작은 고추가 맵다', answer: '작은 고추가 맵다' },
      { id: 'relay-2', type: 'relay', prompt: '소 잃고 외양간 고친다', answer: '소 잃고 외양간 고친다' },
      { id: 'relay-3', type: 'relay', prompt: '얌전한 고양이가 부뚜막에 먼저 올라간다', answer: '얌전한 고양이가 부뚜막에 먼저 올라간다' },
      { id: 'relay-4', type: 'relay', prompt: '낮말은 새가 듣고, 밤말은 쥐가 듣는다', answer: '낮말은 새가 듣고, 밤말은 쥐가 듣는다' },
      { id: 'relay-5', type: 'relay', prompt: '지렁이도 밟으면 꿈틀한다', answer: '지렁이도 밟으면 꿈틀한다' },
      { id: 'relay-6', type: 'relay', prompt: '오르지 못할 나무 쳐다보지도 말아라', answer: '오르지 못할 나무 쳐다보지도 말아라' },
      { id: 'relay-7', type: 'relay', prompt: '등잔 밑이 어둡다', answer: '등잔 밑이 어둡다' },
      { id: 'relay-8', type: 'relay', prompt: '고래 싸움에 새우등 터진다', answer: '고래 싸움에 새우등 터진다' },
      { id: 'relay-9', type: 'relay', prompt: '바늘 도둑이 소도둑 된다', answer: '바늘 도둑이 소도둑 된다' },
      { id: 'relay-10', type: 'relay', prompt: '남의 떡이 더 커 보인다', answer: '남의 떡이 더 커 보인다' },
      { id: 'relay-11', type: 'relay', prompt: '친구 따라 강남 간다', answer: '친구 따라 강남 간다' },
      { id: 'relay-12', type: 'relay', prompt: '비 온 뒤에 땅이 굳는다', answer: '비 온 뒤에 땅이 굳는다' },
      { id: 'relay-13', type: 'relay', prompt: '되로 주고 말로 받는다', answer: '되로 주고 말로 받는다' }
    ]
  }
];
