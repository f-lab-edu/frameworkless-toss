const articleBottom = (data) => {
  console.log("클릭");
  let template = `
  <div class="flex items-center flex-col justify-center mt-[18px] p-[32px] bg-[rgb(249, 250, 251)] w-full h-auto">
    <h2 class="text-[24px] font-[700] mb-[16px] text-[rgb(78, 89, 104)]">재미있게 읽으셨나요?</h2>
    <p class="text-[16px] font-[600] leading-[1.5] text-[#6b7684] mb-[4px] ">
      좋았는지, 아쉬웠는지, 아래 이모지를 눌러 의견을 들려주세요.
    </p>
    <div class="flex gap-x-[24px]">
      <div class="text-[40px]">😍</div>
      <div class="text-[40px]">🤔</div>
    </div>
    <div class="w-full mt-[26px]">
      <button
        class="flex justify-center items-center rounded-[12px] gap-x-[8px] py-[11px] px-[16] w-full bg-[#e8f3ff] text-[15px] text-[#1b64da]"
        type="button"
      >
      >
        <span
          role="presentation"
          style="
            height: 16px;
            width: 16px;
            min-width: 16px;
            color: rgb(49, 130, 246);
          "
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="line-icon"
          >
            <g fill="#B0B8C1" fill-rule="evenodd">
              <path
                d="M21.316 2.684a6.098 6.098 0 00-8.614 0l-2.053 2.052a1.101 1.101 0 001.556 1.556l2.053-2.052a3.895 3.895 0 015.502 0 3.865 3.865 0 011.14 2.751 3.864 3.864 0 01-1.14 2.751l-3.601 3.601c-1.469 1.47-4.032 1.47-5.502 0a3.894 3.894 0 01-.625-.814 1.1 1.1 0 00-1.908 1.096c.267.463.595.892.977 1.274a6.054 6.054 0 004.307 1.784 6.052 6.052 0 004.307-1.784l3.601-3.6A6.054 6.054 0 0023.1 6.99a6.052 6.052 0 00-1.784-4.307"
              ></path>
              <path
                d="M11.795 17.708l-2.053 2.053a3.897 3.897 0 01-5.502 0A3.87 3.87 0 013.1 17.01c0-1.039.405-2.016 1.14-2.75l3.601-3.602a3.895 3.895 0 016.127.814 1.1 1.1 0 101.908-1.096 6.099 6.099 0 00-9.591-1.274l-3.601 3.601A6.054 6.054 0 00.9 17.01c0 1.627.634 3.157 1.784 4.307a6.066 6.066 0 004.307 1.781c1.56 0 3.119-.594 4.307-1.78l2.053-2.053a1.101 1.101 0 00-1.556-1.556"
              ></path>
            </g></svg></span
        >
        아티클 공유하기
      </button>
    </div>
  </div>`;
  return template;
};

export default articleBottom;
