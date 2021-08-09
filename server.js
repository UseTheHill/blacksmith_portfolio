const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./server/routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.listen(PORT, () => {
  console.log(
    `🌎 ==> Express/Node.js API server now on http://localhost:${PORT}`
  );
});
