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
    id: 'song-quiz',
    title: '노래 퀴즈',
    description: '',
    kind: 'song',
    rules: [
      '노래가 들리면 팀이름을 외치고 노래 제목을 맞히면 성공!!'

    ],
    scoreIncrement: 1,
    questions: [
      {
        id: 'song-1',
        prompt: 'Round 0',
        answer: { image: '/songs/bts.jpg', title: 'BTS - Dynamite' },
        audio: '/audio/bts-dynamite.m4a'
      },
      {
        id: 'song-2',
        prompt: 'Round 1',
        answer: { image: '/songs/mamamoo.jpg', title: 'MAMAMOO - Decalcomanie' },
        audio: '/audio/mamamoo-decalcomani.m4a'
      },
      {
        id: 'song-3',
        prompt: 'Round 2',
        answer: { image: '/songs/twice.jpg', title: 'TWICE - Cheer Up' },
        audio: '/audio/twice-cheerup.m4a'
      },
      {
        id: 'song-4',
        prompt: 'Round 3',
        answer: { image: '/songs/parkhyoshin.jpg', title: 'Park Hyo Shin - Wildflower' },
        audio: '/audio/parkhyoshin-wildflower.m4a'
      },
      {
        id: 'song-5',
        prompt: 'Round 4',
        answer: { image: '/songs/ive.jpg', title: 'IVE - I AM' },
        audio: '/audio/IVE-IAM.m4a'
      },
      {
        id: 'song-6',
        prompt: 'Round 5',
        answer: { image: '/songs/aespa.jpg', title: 'aespa - SPICY' },
        audio: '/audio/aespa-spicy.m4a'
      },
      {
        id: 'song-7',
        prompt: 'Round 6',
        answer: { image: '/songs/nmixx.png', title: 'NMIXX - Blue Valentine' },
        audio: '/audio/nmixx-bluevalentine.m4a'
      },
      {
        id: 'song-8',
        prompt: 'Round 7',
        answer: { image: '/songs/iu.jpg', title: 'IU - Palette' },
        audio: '/audio/iu-palette.m4a'
      },
      {
        id: 'song-9',
        prompt: 'Round 8',
        answer: { image: '/songs/blackpink.png', title: 'BLACKPINK - DDU-DU DDU-DU' },
        audio: '/audio/blackpink-ddududdudu.m4a'
      },
      {
        id: 'song-10',
        prompt: 'Round 9',
        answer: { image: '/songs/idle.webp', title: '(G)I-DLE - Tomboy' },
        audio: '/audio/gIdle-tomboy.m4a'
      },
      {
        id: 'song-11',
        prompt: 'Round 10',
        answer: { image: '/songs/seventeen.jpg', title: 'SEVENTEEN - 손오공' },
        audio: '/audio/seventeen-sonogong.m4a'
      },
      {
        id: 'song-12',
        prompt: 'Round 11',
        answer: { image: '/songs/jungkook.jpeg', title: 'Jungkook - Seven' },
        audio: '/audio/jungkook-seven.m4a'
      },
      {
        id: 'song-13',
        prompt: 'Round 12',
        answer: { image: '/songs/melomance.png', title: 'MeloMance - Love, Maybe' },
        audio: '/audio/melomance-lovemaybe.m4a'
      },
      {
        id: 'song-14',
        prompt: 'Round 13',
        answer: { image: '/songs/illit.png', title: 'ILLIT - not cute anymore' },
        audio: '/audio/illit-notcuteanymore.m4a'
      },
      {
        id: 'song-15',
        prompt: 'Round 14',
        answer: { image: '/songs/jeonsomi.png', title: 'Jeon So-mi - DUMB DUMB' },
        audio: '/audio/jeonsomi-dumbdumb.m4a'
      }
    ]
  },
  {
    id: 'tech-logo',
    title: '로고 퀴즈',
    description: '로고를 보고 무엇인지 맞춰봐요.',
    kind: 'logo',
    rules: [
      '화면에 로고가 뜨면 팀이름을 외치고 브랜드 이름을 맞히면 성공!!'

    ],
    scoreIncrement: 1,
    questions: [
      { id: 'logo-python', prompt: 'Python', answer: 'Python', logo: '/logos/python.jpeg', type: 'logo' },
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
    title: '초성퀴즈',
    description: '영화/드라마 편',
    kind: 'initial',
    rules: [
      '화면에 초성이 뜨면 팀이름을 외치고 영화/드라마 제목을 맞히면 성공!!'
    ],
    scoreIncrement: 1,
    questions: [
      { id: 'initial-0', prompt: 'ㄱㅅㅊ', answer: '기생충' },
      { id: 'initial-1', prompt: 'ㅅㄱㅎㄲㅈㅇㅂ', answer: '신과함께-죄와 벌' },
      { id: 'initial-2', prompt: 'ㅇㄱㅅㄴㄴㅈ', answer: '왕과 사는 남자' },
      { id: 'initial-3', prompt: 'ㅇㅂㅇㅌㅇ', answer: '어바웃타임' },
      { id: 'initial-4', prompt: 'ㄱㅎㅈㅇ', answer: '극한직업' },
      { id: 'initial-5', prompt: 'ㄷㄱㄹㄹ', answer: '더 글로리' },
      { id: 'initial-6', prompt: 'ㅅㅈㅇㄱㅌㅇ', answer: '선재업고튀어' },
      { id: 'initial-7', prompt: 'ㅅㅁㄷㅅㅅㅁㅎㄴ', answer: '스물다섯 스물하나' },
      { id: 'initial-8', prompt: 'ㅇㅁㄴㅍㄹㄷㄹㅇㄴㄷ', answer: '악마는 프라다를 입는다' },
      { id: 'initial-9', prompt: 'ㅍㅆㅅㅇㅅㄷ', answer: '폭싹 속았수다' },
      { id: 'initial-10', prompt: 'ㅎㄹㅍㅌㅇㅂㅅㅈㄱㅅㄷ', answer: '해리포터와 불사조 기사단' },

    ]
  },
  {
    id: 'gwan-sang',
    title: '관상 퀴즈',
    description: '',
    kind: 'choice',
    rules: [
      'A/B 선택형 문제입니다.',
      '사회자의 질문을 듣고, 두 선택지 중 하나를 골라주세요!',
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
        id: 'gwan-sang-10',
        prompt: '이 사람의 MBTI는 무엇으로 시작할까요?',
        answer: 'E',
        choices: ['E', 'I'],
        type: 'choice'
      },
      {
        id: 'gwan-sang-3',
        prompt: '이 사람 주량은?',
        answer: '로맨스',
        choices: ['소주 반병 이하', '생각보다 쎄다'],
        type: 'choice'
      },
      {
        id: 'gwan-sang-4',
        prompt: '이 사람은 좋아하는 사람 앞에서?',
        answer: '10개 이상',
        choices: ['말 많아짐', '갑자기 조용해짐'],
        type: 'choice'
      },
      {
        id: 'gwan-sang-5',
        prompt: '이 사람은 알람 몇 개 맞출 것 같은지?',
        answer: '1~2개',
        choices: ['1~2개', '5개 이상'],
        type: 'choice'
      },
      {
        id: 'gwan-sang-6',
        prompt: '이 사람은 무인도 가면??',
        answer: 'KPOP',
        choices: ['적응 잘함', '하루만에 운다'],
        type: 'choice'
      },
      {
        id: 'gwan-sang-7',
        prompt: '이 사람은 연애하면?',
        answer: '강아지',
        choices: ['애교 많음', '츤데레'],
        type: 'choice'
      },
      {
        id: 'gwan-sang-9',
        prompt: '이 사람은 여행 가면?',
        answer: 'A. 계획 빡세게',
        choices: ['계획 빡세게', '무계획 즉흥'],
        type: 'choice'
      },
      {
        id: 'gwan-sang-2',
        prompt: '이 사람은 카톡 읽으면?',
        answer: 'YES',
        choices: ['바로 답장', '생각하다 까먹음'],
        type: 'choice'
      },
      {
        id: 'gwan-sang-8',
        prompt: '이 사람은 갑자기 100억 생기면??',
        answer: '인스타',
        choices: ['부모님 드린다', '내가 쓴다'],
        type: 'choice'
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
  },
  // {
  //   id: 'bingo',
  //   title: '주제 빙고',
  //   description: '',
  //   kind: 'bingo',
  //   rules: [
  //     '5분 동안 스케치북에 빙고판을 채워주세요. (4x4)',
  //     '팀별로 돌아가면서 빙고판의 단어를 부르고, 지워주세요.',
  //     '2줄을 채우면 “빙고!”를 외쳐주세요!',
  //     '1등 : 5점, 2등 : 3점!!'
  //   ],
  //   scoreIncrement: 0,
  //   customButtons: [
  //     { label: 'Team +5', value: 5, teamOnly: true },
  //     { label: 'Team +3', value: 3, teamOnly: true }
  //   ],
  //   questions: [
  //     {
  //       id: 'bingo-1',
  //       prompt: '',
  //       answer: '1등 +5점, 2등 +3점. 점수 버튼으로 직접 지급하세요.'
  //     }
  //   ]
  // },
];
