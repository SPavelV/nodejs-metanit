const express = require("express");
const app = express();

app.get("/book/:pageName.:pageExt", function (request, response) {
  const pageName = request.params["pageName"];
  const pageExt = request.params["pageExt"];
  response.send(`Запрошенный файл: ${pageName}.${pageExt}`);
});

app.get(
  "/categories/:categoryId/products/:productId",
  function (request, response) {
    let catId = request.params["categoryId"];
    let prodId = request.params["productId"];

    response.send(`Категория: ${catId}, товар: ${prodId}`);
  }
);

app.get("/products/:productId", function (request, response) {
  response.send("productId: " + request.params["productId"]);
});

app.listen(3000);
