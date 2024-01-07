import footer from "../ui/footer.js";
import header from "../ui/header.js";
import bottomBanner from "../ui/bottomBanner.js";
import articleHeader from "./articleHeader.js";
import articleBottom from "./articleBottom.js";
import articleContent from "./articleContent.js";
import getArticleData from "../../apis/getArticleData.js";

const articlePage = async (target, id) => {
  try {
    const res = await getArticleData(id);
    const { thumbImg, article_id, title, desc, writer, reg_date, content } =
      res;
    const headerTemplate = header();
    const footerTemplate = footer();

    const headerData = {
      thumbImg,
      title,
      writer,
      reg_date,
    };
    const articleHeaderTemplate = articleHeader(headerData);

    const articleContentTemplate = articleContent(content);
    const articleBottomTemplate = articleBottom();
    const bottomBannerTemplate = bottomBanner();

    let template = `
    {{__header__}}
  
    <section class='px-[30px] max-w-[700px] mb-[192px] mx-auto'>
      {{__article__header__}}
      {{__article_content__}}
    </section>
  
    <section class="max-w-[700px] mx-auto">
      {{__article__bottom__}}
    </section>
    
    {{__bottom_banner__}}
    {{__footer__}}
    `;

    template = template.replace("{{__header__}}", headerTemplate);
    template = template.replace(
      "{{__article__header__}}",
      articleHeaderTemplate
    );
    template = template.replace(
      "{{__article_content__}}",
      articleContentTemplate
    );
    template = template.replace(
      "{{__article__bottom__}}",
      articleBottomTemplate
    );
    template = template.replace("{{__bottom_banner__}}", bottomBannerTemplate);
    template = template.replace("{{__footer__}}", footerTemplate);

    target.innerHTML = template;
  } catch {
    throw Error("페이지 없음");
  }
};

export default articlePage;
