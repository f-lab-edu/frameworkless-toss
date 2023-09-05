const ROUTE_PARAMETER_REGEXP = /:(\w+)/g;
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

class Router {
  #routes;
  #notFound;
  #lastPathname;

  constructor() {
    this.routes = [];
    this.notFound = () => {};
    this.lastPathname = "";
  }

  /* 
  현재 URL을 확인하고 일치하는 라우트의 콜백을 실행
  일치하는 라우트 없을 경우 notFound 콜백 실행
  */
  checkRoutes() {
    const { pathname } = window.location;
    if (this.lastPathname === pathname) {
      return;
    }
    this.lastPathname = pathname;
    const currentRoute = this.routes.find((route) => {
      const { testRegExp } = route;
      return testRegExp.test(pathname);
    });

    if (!currentRoute) {
      this.notFound();
      return;
    }

    const urlParams = extractUrlParams(currentRoute, pathname);
    currentRoute.callback(urlParams);
  }

  /**
   * routes 객체에 path, 콜백함수 인자로 받아
   *
   * @param {*} path - url, url/:경로매개변수
   * @param {*} callback - 렌더함수
   * @returns router 객체에 경로, 해당경로에 대한 콜백 등록
   */
  addRoute(path, callback) {
    const params = [];
    const parsedPath = path
      .replace(ROUTE_PARAMETER_REGEXP, (match, paramName) => {
        params.push(paramName);
        return URL_FRAGMENT_REGEXP;
      })
      .replace(/\//g, "\\/");
    this.routes.push({
      testRegExp: new RegExp(`^${parsedPath}$`),
      callback,
      params,
    });
    return this;
  }

  /* 일치하는 라우트 없을 떄 실행할 콜백 설정 */
  setNotFound(cb) {
    this.notFound = cb;
    return this;
  }

  /* 주어진 경로로 이동하고 해당 라우트의 콜백을 실행 */
  navigate(path) {
    window.history.pushState(null, null, path);
    this.checkRoutes();
  }

  /** 초기화 */
  init() {
    this.checkRoutes();
    window.addEventListener("popstate", this.checkRoutes.bind(this));
  }
}

export default Router;
