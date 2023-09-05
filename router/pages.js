import getArticleData from "../apis/getArticleData.js";
import getListData from "../apis/getListData.js";
import articlePage from "../view/article/articlePage.js";
import listPage from "../view/lists/listPage.js";

export default (container) => {
  const tech = async () => {
    const res = await getListData("tech");
    container.innerHTML = listPage(res);
  };

  const design = async () => {
    const res = await getListData("design");
    container.innerHTML = listPage(res);
  };

  const article = async (params) => {
    const { id } = params;
    try {
      const res = await getArticleData(id);
      container.innerHTML = articlePage(res);
    } catch (error) {
      console.log(error)
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
