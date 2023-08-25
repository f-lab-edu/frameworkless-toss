/**
 *
 * content 데이터 구조를 객체화하여 태그에 맞게 HTML 코드 렌더되도록 처리
 * @example {
 * tag: "div",
 * props: { class: "mt-[50px]" },
 * children: [ ] // text면 텍스트 노드, 그 외에는 {tag, props, children} 형태 객체
 * }
 *
 * @returns html 요소 반환
 */

function domRender(node) {
  // node가 문자열이면 텍스트 노드를 생성
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  // 노드 생성, tag에 입력한 태그로 요소를 생성
  const element = document.createElement(node.tag);

  // 속성값 추가, props 객체에 있는 키:값 형태로 속성 추가
  Object.entries(node.props).forEach(([name, value]) =>
    element.setAttribute(name, value)
  );

  // 자식 노드 재귀적으로 호출하여 DOM 으로 변환한 후 원래의 요소에 추가
  node.children.map(domRender).forEach(element.appendChild.bind(element));

  return element;
}

const articleContent = (content) => {
  let template = domRender(content).outerHTML; // DOM 문자열로 변환 후 반환
  return template;
};

export default articleContent;
