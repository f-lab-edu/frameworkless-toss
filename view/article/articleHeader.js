const articleHeader = (data) => {
  const { thumbImg, title, writer, reg_date } = data;
  let template = `
  <header>
    <img
    class="w-full mt-[36px] rounded-[12px]"
      src=${thumbImg}
      alt=""
    />
    <h1 class="mt-[20px] text-[48px] font-[700] text-[#333d4b]">
      ${title}
    </h1>
    <section class="flex items-center">
      <img
        src="https://static.toss.im/assets/toss-tech/slash_juneseokbeomgeun.png"
        alt=""
        class="w-[48px] h-[48px] rounded-[50%] mr-[14px]"
      />
      <div>
        <div class="flex items-end pt-[8px] text-[17px] mb-[2px]">
          <h3 class="text-[17px] font-[600] text-[#4e5968]">${writer.name}</h3>
          <h3 class="text-[17px] font-[600] text-[#4e5968]">ㆍ${writer.role}</h3>
        </div>
        <div class="text-[14px] leading-[1.5] text-[#8b95a1]">${reg_date}</div>
      </div>
    </section>
  </header>`;
  return template;
};

export default articleHeader;
