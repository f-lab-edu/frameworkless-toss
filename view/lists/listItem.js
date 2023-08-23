export default function listItem(data) {
  const { title, thumbImg, desc, reg_date } = data;

  let template = `
  <li data-navigate="/article/title-id">
    <div  >
      <img src=${thumbImg} />
      <h1>${title}</h1>
      <p>${desc}</p>
      <time>${reg_date}</time>
    </div>
  </li>
  `;

  return template;
}
