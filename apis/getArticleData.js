import { DUMMY_ARTICLE_DATA } from "../data/data-article.js";
const getArticleData = (id) => {
  return new Promise((res, rej) => {
    const hasData = DUMMY_ARTICLE_DATA.hasOwnProperty(id); // 임시
    setTimeout(() => {
      if (hasData) {
        res(DUMMY_ARTICLE_DATA[id]);
      } else {
        rej(new Error("No Data"));
      }
    }, 400);
  });
};

export default getArticleData;
