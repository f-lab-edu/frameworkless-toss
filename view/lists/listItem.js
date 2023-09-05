export default function listItem(data) {
  const { title, id, thumbImg, desc, reg_date } = data;

  let template = `
  <li data-navigate="/article/${id}" class="cursor-pointer mb-[80px] last:mb-[0]">
    <div class="flex items-center gap-x-[48px]">
      <img src=${thumbImg} alt=${title} class=" flex-shrink-0 flex-grow-0 flex-[240px] w-[240px] h-[240px] overflow-hidden object-cover rounded-[14px]" />
      <div>
        <h3 class="mb-[14px] text-[#333d4b] font-[700] text-[36px]">${title}</h3>
        <p class="mb-[12px] text-[#4e5968] text-ellipsis line-clamp-2 leading-[1.6]">${desc}</p>
        <time class="text-[15px] text-[#8b95a1] leading-[1.6]">${reg_date}</time>
      </div>
    </div>
  </li>
  `;

  return template;
}
