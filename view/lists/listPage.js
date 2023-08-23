import footer from "../ui/footer.js";
import header from "../ui/header.js";
import listItemView from "./listItem.js";

const listPage = (res) => {
  const { results, title } = res;
  const headerTemplate = header();
  const footerTemplate = footer();

  // TODO join 방식 말고 다른 방법으로 수정하기
  const ItemView = results.map((item) => listItemView(item)).join("");

  let template = `<section>
    <h1>${title}</h1>
    <ul>${ItemView}</ul>
  </section>`;

  return headerTemplate + template + footerTemplate;
};

export default listPage;
