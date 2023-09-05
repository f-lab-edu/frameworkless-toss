import footer from "../ui/footer.js";
import header from "../ui/header.js";
import listItemView from "./listItem.js";
import bottomBanner from "../ui/bottomBanner.js";
import getListData from "../../apis/getListData.js";

const listPage = async (target, category) => {
  const res = await getListData(category);
  const { results, title } = res;

  const headerTemplate = header();
  const footerTemplate = footer();
  const ItemsTemplate = results.map((item) => listItemView(item)).join("");
  const bottomBannerTemplate = bottomBanner();

  let template = `
  {{__header__}}

  <section class='px-[30px] max-w-[980px] mb-[192px] mx-auto'>
    <h1 class="py-[20px] text-[36px] font-[700] mt-[52px] mb-[32px]">
      ${title}
    </h1>
    <ul>
      {{__list_items__}}
    </ul>
  </section>
  
  {{__bottom_banner__}}
  {{__footer__}}
  `;
  template = template.replace("{{__header__}}", headerTemplate);
  template = template.replace("{{__list_items__}}", ItemsTemplate);
  template = template.replace("{{__footer__}}", footerTemplate);
  template = template.replace("{{__bottom_banner__}}", bottomBannerTemplate);

  target.innerHTML = template;
};

export default listPage;
