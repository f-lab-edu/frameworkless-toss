import getListData from "../apis/getListData.js";
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

  const article = (params) => {
    const { id } = params;
    container.textContent = `아티클 상세 ${id}`;
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
