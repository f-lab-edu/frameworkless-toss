/* 
 URL 경로의 동적 세그먼트를 식별
예) /article/:id 에서 :id 등의 패턴을 검색하는 정규 표현식
\w+는 하나 이상의 알파벳, 숫자, 밑줄을 의미
*/
const ROUTE_PARAMETER_REGEXP = /:(\w+)/g;

/* 
URL의 일부분을 대응시키기 위한 정규 표현식
URL의 세그먼트를 캡쳐
[^\\/]는 슬래시를 제외한 모든 문자를 의미
*/
const URL_FRAGMENT_REGEXP = "([^\\/]+)";

/* 
위 두 정규표현식으로
예)  /article/:id라는 패턴을 가진 라우트를 등록할 경우
ROUTE_PARAMETER_REGEXP는 :id를 감지하고 이를 URL_FRAGMENT_REGEXP로 교체
이는 /article/([^\\/]+) 정규ㅠㅛ현식이 되며, 'article/123' 같은 실제 URL과 매치됨
*/

/**
 * 현재 URL에서 동적 라우트 매개변수의 값을 추출
 * @param {*} route - 주어진 라우트
 * @param {*} pathname - 경로명을 기반으로
 * @returns {{}} params 파라미터 추출
 */
const extractUrlParams = (route, pathname) => {
  const params = {};

  if (route.params.length === 0) {
    return params;
  }

  const matches = pathname.match(route.testRegExp);

  matches.shift();

  matches.forEach((paramValue, index) => {
    const paramName = route.params[index];
    params[paramName] = paramValue;
  });

  return params;
};

export default () => {
  const routes = [];
  let notFound = () => {};
  let lastPathname;

  /* 
  현재 URL을 확인하고 일치하는 라우트의 콜백을 실행
  일치하는 라우트 없을 경우 notFound 콜백 실행
  */
  const checkRoutes = () => {
    const { pathname } = window.location;
    /* 이전경로와 같다면 종료 */
    if (lastPathname === pathname) {
      return;
    }

    /* 이전경로 현재경로로 갱신 */
    lastPathname = pathname;

    /* 현재 Route , url 변경되면 최초1회만 실행 
    경로 설정
    */
    const currentRoute = routes.find((route) => {
      const { testRegExp } = route;
      return testRegExp.test(pathname);
    });

    if (!currentRoute) {
      notFound();
      return;
    }

    const urlParams = extractUrlParams(currentRoute, pathname);

    currentRoute.callback(urlParams);
  };

  const router = {
    /**
     * routes 객체에 path, 콜백함수 인자로 받아
     *
     * @param {*} path - url, url/:경로매개변수
     * @param {*} callback - 렌더함수
     * @returns router 객체에 경로, 해당경로에 대한 콜백 등록
     */
    addRoute: (path, callback) => {
      const params = [];

      const parsedPath = path
        .replace(ROUTE_PARAMETER_REGEXP, (match, paramName) => {
          params.push(paramName);
          return URL_FRAGMENT_REGEXP;
        })
        .replace(/\//g, "\\/");

      routes.push({
        testRegExp: new RegExp(`^${parsedPath}$`),
        callback,
        params,
      });

      // 메소드 체이닝 가능하게 하도록 router 반환
      return router;
    },

    /* 일치하는 라우트 없을 떄 실행할 콜백 설정 */
    setNotFound: (cb) => {
      notFound = cb;
      // 메소드 체이닝 가능하게 하도록 router 반환
      return router;
    },

    /* 주어진 경로로 이동하고 해당 라우트의 콜백을 실행 */
    navigate: (path) => {
      /* 
      히스토리 API/pushState(state, title, URL) 
      : 히스토리 스택의 데이터를 푸시하고 제공된 URL로 이동
      현재 URL을 히스토리에 추가
      */
      window.history.pushState(null, null, path);
      // 라우트 검사 및 해당 콜백 호출
      checkRoutes();
    },

    /* 초기 경로 확인 */
    start: () => {
      checkRoutes();
      /* 
      브라우저 히스토리 API를 사용
      */
      window.addEventListener("popstate", checkRoutes);
    },
  };

  return router;
};
