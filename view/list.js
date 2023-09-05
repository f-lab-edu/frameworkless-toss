import listItemView from "./list-item.js";

const listView = (res) => {
  const { results, title } = res;
  // TODO join 방식 말고 다른 방법으로 수정하기
  const ItemView = results.map((item) => listItemView(item)).join("");
  return `<section>
    <h1>${title}</h1>
    <ul>${ItemView}</ul>
  </section>`;
};

export default listView;
