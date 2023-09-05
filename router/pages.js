import getDataList from "../apis/getListData.js";
import listView from "../view/list.js";

export default (container) => {
  const tech = async () => {
    const res = await getDataList("tech");
    container.innerHTML = listView(res);
  };

  const design = async () => {
    const res = await getDataList("design");
    container.innerHTML = listView(res);
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
