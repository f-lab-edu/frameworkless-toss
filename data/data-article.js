const DUMMY_CONTENT_TEMP1 = {
  tag: "div",
  props: { class: "mt-[50px]" },
  children: [
    {
      tag: "p",
      props: { class: "text-[17px] leading-[1.6] mt-[15px]" },
      children: [
        "토스 앱은 넓은 범위의 기기를 지원하면서도 현대적인 JavaScript를 이용해서 개발되고 있습니다. 그렇지만 최신 JavaScript를 오래된 브라우저 위에서 실행하기 위해서는 “Polyfill” 문제를 해결해야 하는데요.",
      ],
    },
    {
      tag: "p",
      props: { class: "text-[17px] leading-[1.6] mt-[15px]" },
      children: [
        "이번 아티클에서는 Polyfill 문제가 무엇인지 알아보고, 토스에서 어떻게 똑똑하게 다루고 있는지 살펴보려고 합니다.",
      ],
    },
    {
      tag: "h1",
      props: {
        class: "text-[30px] leading-[1.55] font-[700] mt-[40px] mb-[5px]",
      },
      children: ["Polyfill 이란?"],
    },
    {
      tag: "p",
      props: { class: "text-[17px] leading-[1.6] mt-[15px]" },
      children: [
        "오래된 버전의 브라우저에서는 현재 JavaScript가 당연하게 사용하고 있는 Promise나 Set 객체가 없는 경우가 있습니다.",
      ],
    },
    {
      tag: "p",
      props: { class: "text-[17px] leading-[1.6] mt-[15px]" },
      children: [
        "예를 들어서, 아래와 같은 코드는 최신 브라우저에서는 잘 동작하지만, 오래된 브라우저에서는 실패합니다. 객체나 메서드에 대한 구현이 없기 때문이죠.",
      ],
    },
    {
      tag: "p",
      props: { class: "text-[17px] leading-[1.6] mt-[15px]" },
      children: [
        "얼음과 설산에서 만물은 만천하의 천지는 이것이다. 그들을 이것이야말로 눈에 청춘의 인간이 살았으며, 봄날의 청춘에서만 대한 보라. 광야에서 있는 얼음에 위하여, 영원히 그와 커다란 심장은 대고, 약동하다. 그들의 얼음에 산야에 주며, 그림자는 방황하여도, 장식하는 황금시대를 교향악이다. 곧 지혜는 되려니와, 청춘의 그것을 행복스럽고 새가 하는 것이다.보라, 아름다우냐? 주며, 얼음과 우리 그들은 철환하였는가? 보는 뜨고, 석가는 있는 길을 꽃 인간에 것이다. 시들어 청춘이 사는가 이것이다. 내려온 전인 별과 속에서 살 이상, 천하를 얼음에 보라. 미묘한 찾아다녀도, 있으며, 든 것이다. 얼음 속에 온갖 새가 전인 길을 모래뿐일 가는 피다.",
      ],
    },
    {
      tag: "img",
      props: {
        class: "text-[17px] leading-[1.6] my-[30px] rounded-[8px]",
        src: "https://static.toss-internal.com/ipd-tcs/toss_core/staging/cf75c34d-feeb-4909-a200-8119c0ef7fa6",
      },
      children: [],
    },
    {
      tag: "p",
      props: {
        class: "text-center text-[17px] text-[#3f123d]",
      },
      children: ["img 태그도 추가할 수 있습니다."],
    },
    {
      tag: "img",
      props: {
        class: "text-[17px] leading-[1.6] my-[30px] rounded-[8px]",
        src: "https://static.toss-internal.com/ipd-tcs/toss_core/live/e6e776d0-1d3f-42c8-a230-9fa20eff55cd",
      },
      children: [],
    },
    {
      tag: "h1",
      props: {
        class: "text-[30px] leading-[1.55] font-[700] mt-[40px] mb-[5px]",
      },
      children: ["h1 태그에 스타일을 입히면 이렇게 됩니다."],
    },
    {
      tag: "p",
      props: {
        class: "text-[17px] leading-[1.6] mt-[15px]",
      },
      children: ["DOM 구조를 한눈에 파악하기는 좀 어려운 것 같네요."],
    },
  ],
};

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
    content: DUMMY_CONTENT_TEMP1, // 이 부분 데이터로 처리
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
    content: DUMMY_CONTENT_TEMP1, // 이 부분 데이터로 처리
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
    content: DUMMY_CONTENT_TEMP1, // 이 부분 데이터로 처리
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
    content: DUMMY_CONTENT_TEMP1, // 이 부분 데이터로 처리
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
    content: DUMMY_CONTENT_TEMP1, // 이 부분 데이터로 처리
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
    content: DUMMY_CONTENT_TEMP1, // 이 부분 데이터로 처리
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
    content: DUMMY_CONTENT_TEMP1, // 이 부분 데이터로 처리
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
    content: DUMMY_CONTENT_TEMP1, // 이 부분 데이터로 처리
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
    content: DUMMY_CONTENT_TEMP1, // 이 부분 데이터로 처리
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
    content: DUMMY_CONTENT_TEMP1, // 이 부분 데이터로 처리
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
    content: DUMMY_CONTENT_TEMP1, // 이 부분 데이터로 처리
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
    content: DUMMY_CONTENT_TEMP1, // 이 부분 데이터로 처리
  },
};
