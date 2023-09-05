const ROUTE_PARAMETER_REGEXP = /:(\w+)/g;
const URL_FRAGMENT_REGEXP = "([^\\/]+)";
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
  routes;
  notFound;
  lastPathname;

  constructor() {
    this.routes = [];
    this.notFound = () => {};
    this.lastPathname = "";
  }

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

  setNotFound(cb) {
    this.notFound = cb;
    return this;
  }

  navigate(path) {
    window.history.pushState(null, null, path);
    this.checkRoutes();
  }

  init() {
    this.checkRoutes();
    window.addEventListener("popstate", this.checkRoutes.bind(this));
  }
}

export default Router;
