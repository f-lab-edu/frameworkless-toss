import createRouter from "./router/router.js";
import createPages from "./router/pages.js";

const container = document.querySelector("#app");

const pages = createPages(container);

/* 
라우트 설정
경로 - 경로에 맞는 함수 호출되도록 설정
일치하는 경로 없을 경우 page.notFound 호출
start() 메서드로 라우터 시작
- 초기 경로 확인, 페이지 내에서 라우트 변경을 감지하기 위한 리스너 설정
*/
const router = createRouter();
router
  .addRoute("/", pages.tech)
  .addRoute("/tech", pages.tech)
  .addRoute("/design", pages.design)
  .addRoute("/article/:id", pages.article)
  .setNotFound(pages.notFound)
  .start();

/* 
내베기에션 버튼 이벤트 리스너 설정
data-navigate 속성 값을 가져와 router.navigate() 메서드 호출하여 해당 경로로 이동
*/
const NAV_BTN_SELECTOR = "button[data-navigate]";
document.body.addEventListener("click", (e) => {
  const { target } = e;
  if (target.matches(NAV_BTN_SELECTOR)) {
    const { navigate } = target.dataset;
    router.navigate(navigate);
  }
});
