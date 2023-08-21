export default (container) => {
  const tech = () => {
    container.textContent = "개발";
  };

  const design = () => {
    container.textContent = "디자인";
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
