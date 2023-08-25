const DUMMY_CONTENT = [
  {
    tag: "h1",
    children: "텍스트",
  },
  {
    tag: "p",
    children: "텍스트",
  },
];

export const DUMMY_ARTICLE_DATA = {
  id1: {
    thumbImg: "https://static.toss.im/career-resource/slackbot101.png",
    article_id: "id1",
    title: "슬랙봇 디자인 101",
    desc: "설명글",
    writer: {
      name: "강영화",
      role: "Product Designer(Tools)",
      profileImg: "https://static.toss.im/illusts/profile-younghwa.jpeg",
    },
    reg_date: "2023.8.23",
    category: "tech",
    content: DUMMY_CONTENT, // 이 부분 데이터로 처리
  },
  id2: {
    thumbImg:
      "https://static.toss.im/assets/toss-tech/cover-1st-product-brand-designer.png",

    article_id: "id2",
    title: "프로덕트 브랜딩, 어떻게 시작해야할까?",
    desc: "처음 프로덕트 브랜딩 팀이 만들어졌을 때, 어떻게 팀의 정체성을 찾아나갔는지 공유할게요.",
    writer: {
      name: "김지윤",
      role: "Product Branding Team Leader",
      profileImg: "https://static.toss.im/simplicity23/16-logo/jiyoon.png",
    },
    reg_date: "2023.7.21",
    category: "tech",
    content: DUMMY_CONTENT, // 이 부분 데이터로 처리
  },
  id3: {
    thumbImg: "https://static.toss.im/3d/tossface-part-thumbnail.png",
    article_id: "id3",
    title: "토스의 이모지 폰트, 토스페이스 제작기",
    desc: "세계적인 IT 기업에서나 만드는 이모지 폰트를 어떻게 한국 금융 플랫폼 토스에서 만들게 됐을까? 토스의 이모지 폰트, 토스페이스 제작의 모든 것을 공개합니다.",
    writer: {
      name: "고현선",
      role: "Graphic Designer",
      profileImg: "https://static.toss.im/assets/toss-tech/koh.png",
    },
    reg_date: "2023.7.21",
    category: "tech",
    content: DUMMY_CONTENT, // 이 부분 데이터로 처리
  },
  id4: {
    thumbImg: "https://static.toss.im/illusts/tools-designer-cover.jpg",
    article_id: "id4",
    title: "토스 최초의 Product Designer(Tools)의 일하는 방식",
    desc: "토스팀에서 첫 Product Designer (Tools) 직무로 일하기 시작하면서 어떤 걸 배웠는지 알려드릴게요.",
    writer: {
      name: "강영화",
      role: "Product Designer(Tools)",
      profileImg: "https://static.toss.im/illusts/profile-younghwa.jpeg",
    },
    reg_date: "2023.7.21",
    category: "tech",
    content: DUMMY_CONTENT, // 이 부분 데이터로 처리
  },
  id5: {
    thumbImg:
      "https://static.toss.im/career-resource/thumnail_simplicity_techblog.png",
    article_id: "id5",
    title: "Simplicity23, 오늘도 문제를 해결하고 있을 모든 디자이너에게",
    desc: "설명글",
    writer: {
      name: "정희녕",
      role: "Head of UX",
      profileImg: "https://static.toss.im/assets/toss-tech/heeyeun-jung.png",
    },
    reg_date: "2023.7.21",
    category: "tech",
    content: DUMMY_CONTENT, // 이 부분 데이터로 처리
  },
  id6: {
    thumbImg:
      "https://static.toss.im/assets/toss-tech/cover-1st-interactiondesigner.png",
    article_id: "id6",
    title: "첫 인터랙션 디자이너가 문제를 해결하는 법",
    desc: "설명글",
    writer: {
      name: "김지혜",
      role: "Interaction Designer",
      profileImg: "https://static.toss.im/assets/toss-tech/jihye-kim.png",
    },
    reg_date: "2023.7.21",
    category: "tech",
    content: DUMMY_CONTENT, // 이 부분 데이터로 처리
  },
  id7: {
    thumbImg:
      "https://static.toss.im/assets/toss-tech/slash_juneseokbeomgun_thumb.png",
    article_id: "id7",
    title: "놀러오세요! 프론트엔드 다이빙 클럽",
    desc: "설명글",
    writer: {
      name: "이준석/송범근",
      role: "iOS Developer",
      profileImg:
        "https://static.toss.im/assets/toss-tech/slash_juneseokbeomgeun.png",
    },
    reg_date: "2023.7.21",
    category: "tech",
    content: DUMMY_CONTENT, // 이 부분 데이터로 처리
  },
  id8: {
    thumbImg:
      "https://static.toss.im/assets/toss-tech/frontend-diving-club.jpg",
    article_id: "id8",
    title: "놀러오세요! 프론트엔드 다이빙 클럽",
    desc: "설명글",
    writer: {
      name: "진유림",
      role: "",
      profileImg: "https://static.toss.im/assets/toss-tech/yurim-jin.jpg",
    },
    reg_date: "2023.7.21",
    category: "tech",
    content: DUMMY_CONTENT, // 이 부분 데이터로 처리
  },
  id9: {
    thumbImg: "https://static.toss.im/assets/toss-tech/node%20js-security.png",
    article_id: "id9",
    title: "Node.js url.parse() 취약점 컨트리뷰션",
    desc: "설명글",
    writer: {
      name: "표상영",
      role: "Security Researcher",
      profileImg: "https://static.toss.im/assets/toss-tech/pyozzi.jpeg",
    },
    reg_date: "2023.7.21",
    category: "tech",
    content: DUMMY_CONTENT, // 이 부분 데이터로 처리
  },
  id10: {
    thumbImg: "https://static.toss.im/illusts-content/img-tech-cover.png",
    article_id: "id10",
    title: "Spring Boot Actuator의 헬스체크 살펴보기",
    desc: "설명글",
    writer: {
      name: "양권성",
      role: "Server Developer",
      profileImg: "https://static.toss.im/assets/toss-tech/gwonsung-yang.jpeg",
    },
    reg_date: "2023.7.21",
    category: "tech",
    content: DUMMY_CONTENT, // 이 부분 데이터로 처리
  },
  id11: {
    thumbImg: "https://wp.toss.tech/wp-content/uploads/2023/03/center.png",
    article_id: "id11",
    title: "ESLint와 AST로 코드 퀄리티 높이기",
    desc: "설명글",
    writer: {
      name: "전성",
      role: "Frontend Platform Engineer",
      profileImg: "https://static.toss.im/assets/toss-tech/sung-jeon.jpeg",
    },
    reg_date: "2023.7.21",
    category: "tech",
    content: DUMMY_CONTENT, // 이 부분 데이터로 처리
  },
  id12: {
    thumbImg:
      "https://wp.toss.tech/wp-content/uploads/2023/03/00017-3291509353.png",
    article_id: "id12",
    title: "tosspayments-restdocs: 선언형 문서 작성 라이브러리",
    desc: "설명글",
    writer: {
      name: "이준희",
      role: "Server Developer",
      profileImg: "https://static.toss.im/assets/toss-tech/junlee-lee.png",
    },
    reg_date: "2023.7.21",
    category: "tech",
    content: DUMMY_CONTENT, // 이 부분 데이터로 처리
  },
};
