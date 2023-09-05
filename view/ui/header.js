export default function header() {
  let template = `
  <nav
    class="flex justify-between items-center h-[60px] border border-solid border-b-[#ddd] px-[30px]"
  >
    <h1 class="w-[130px] flex-shrink-0">
      <img src="/src/toss-logo.svg" />
    </h1>
    
    <div class="flex items-center gap-x-[20px]">
      <button data-navigate="/design" class="text-[15px] text-[#4e5968]">디자인</a>
      <button data-navigate="/tech" class="text-[15px] text-[#4e5968]">개발</button>
      <button
        type="button"
        class="bg-[#3182f6] py-[7px] px-[12px] text-[14px] rounded-[4px] text-[#fff]"
      >
        채용 바로가기
      </button>
    </div>
  </nav>
  `;
  return template;
}
