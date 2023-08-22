import listItemView from "./list-item.js";

const listView = (res) => {
  const { results, title } = res;
  const ItemView = results.map((item) => listItemView(item)).join("");
  return `<section><h1>${title}</h1><ul>${ItemView}</ul></section>`;
};

export default listView;
