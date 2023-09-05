import domRender from "../../utils/domRender.js";

const articleContent = (content) => {
  let template = domRender(content).outerHTML; // DOM 문자열로 변환 후 반환
  return template;
};

export default articleContent;
