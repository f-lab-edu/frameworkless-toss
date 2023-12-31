import { DUMMY_DATA_DESIGN } from "../data/data-design.js";
import { DUMMY_DATA_TECH } from "../data/data-tech.js";

const getListData = (category) => {
  return new Promise((res, rej) => {
    const success = true; // 임시
    setTimeout(() => {
      if (success) {
        res(category === "tech" ? DUMMY_DATA_TECH : DUMMY_DATA_DESIGN);
      } else {
        rej(new Error());
      }
    }, 400);
  });
};

export default getListData;
