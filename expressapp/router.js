const express = require("express");
const app = express();

const productRouter = express.Router();

productRouter.use("/create", function (request, response) {
  response.send("Добавление товара");
});

productRouter.use("/:id", function (request, response) {
  response.send(`Товар ${request.params.id}`);
});

productRouter.use("/", function (request, response) {
  response.send("Список товаров");
});

app.use("/products", productRouter);

app.use("/about", function (request, response) {
  response.send("О сайте");
});

app.use("/", function (request, response) {
  response.send("Главная страница");
});

app.listen(3000);
