export default function footer() {
  let template = `
  <footer class="pt-[50px] pb-[100px]">
    <div class="max-w-[1064px] m-auto px-[67px]">
      <div class="flex pb-[50px]">
        <ul class="w-[170px] text-[15px] color-[#6b7684]">
          <li><div class="text-[#333d4b] font-[700] mb-[5px]">토스테크</div></li>
          <li>
            <a href="mailto:techblog@toss.im">의견 보내기</a>
          </li>
        </ul>
        <ul class="w-[170px] text-[15px] color-[#6b7684]">
          <li><div class="text-[#333d4b] font-[700] mb-[5px]">토스</div></li>
          <li>
            <a href="https://toss.im">홈페이지</a>
          </li>
          <li>
            <a href="https://team.toss.im">회사 소개</a>
          </li>
          <li>
            <a href="https://toss.im/career">채용</a>
          </li>
        </ul>
        <ul class="w-[170px] text-[15px] color-[#6b7684] flex-1">
          <li><div class="text-[#333d4b] font-[700] mb-[5px]">고객센터</div></li>
          <li>
            <a href="tel:1599-4905">전화: 1599-4905 (24시간 연중무휴)</a>
          </li>
          <li>
            <a href="mailto:support.toss.im">이메일: support@toss.im</a>
          </li>
          <li>
            <a href="https://goto.kakao.com/@toss">카카오톡: @toss</a>
          </li>
        </ul>
      </div>
      <address class="color-[#8b95a1] text-[13px] whitespace-pre-wrap">
        <strong class="block pb-[16px] text-[15px] colo-[#333d4b]"
          >㈜비바리퍼블리카</strong
        >Copyright © Viva Republica, Inc. All Rights Reserved.
      </address>
      <ul class="flex gap-x-[8px] py-[80px] ">
        <li>
          <a
            aria-label="Toss Facebook"
            target="_blank"
            href="https://www.facebook.com/toss.revolution"
            ><img
              src="https://static.toss.im/assets/homepage/safety/icn-facebook.svg"
              alt="Toss Facebook"
          /></a>
        </li>
        <li>
          <a
            aria-label="Toss blog"
            target="_blank"
            href="https://blog.toss.im"
            ><img
              src="https://static.toss.im/assets/homepage/safety/icn-blog.svg"
              alt="Toss blog"
          /></a>
        </li>
        <li>
          <a
            aria-label="Toss Naver Post"
            target="_blank"
            href="https://post.naver.com/tossblog"
            ><img
              src="https://static.toss.im/assets/homepage/safety/icn-naver.svg"
              alt="Toss Naver Post"
          /></a>
        </li>
        <li>
          <a
            aria-label="Toss Twitter"
            target="_blank"
            href="https://twitter.com/toss__official"
            ><img
              src="https://static.toss.im/assets/homepage/safety/icn-twitter.svg"
              alt="Toss Twitter"
          /></a>
        </li>
        <li>
          <a
            aria-label="Toss Instagram"
            target="_blank"
            href="https://www.instagram.com/toss.im/"
            ><img
              src="https://static.toss.im/assets/homepage/safety/icn-instagram.svg"
              alt="Toss Instagram"
          /></a>
        </li>
      </ul>
    </div>
  </footer>
  `;
  return template;
}
