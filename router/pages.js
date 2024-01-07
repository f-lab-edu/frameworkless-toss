import getArticleData from "../apis/getArticleData.js";
import getListData from "../apis/getListData.js";
import articlePage from "../view/article/articlePage.js";
import listPage from "../view/lists/listPage.js";

export default (container) => {
  const tech = () => {
    listPage(container, "tech");
  };

  const design = () => {
    listPage(container, "design");
  };

  const article = async (params) => {
    const { id } = params;
    try {
      await articlePage(container, id);
    } catch (error) {
      notFound();
    }
  };

  const notFound = () => {
    container.textContent = "페이지 없음!";
  };

  return {
    tech,
    design,
    article,
    notFound,
  };
};
