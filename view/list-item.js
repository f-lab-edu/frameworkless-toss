export default function listItemView(data) {
  console.log("data", data);
  const { title, thumbImg, desc, reg_date } = data;
  return `
    <li>
      <div>
        <img src=${thumbImg} />
        <h1>${title}</h1>
        <p>${desc}</p>
        <time>${reg_date}</time>
      </div>
    </li>`;
}
