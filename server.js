const express = require("express");
const path = require("path");
const history = require("express-history-api-fallback");

const app = express();
const root = path.join(__dirname);
const PORT = 3000;

app.use(express.static(root)); // 이를 위로 올려보세요.
app.use(history("index.html", { root: root }));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
