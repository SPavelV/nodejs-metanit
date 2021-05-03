const express = require("express");
const app = express();

// определяем роутеры
const userRouter = express.Router(); // для адресов "/users"

userRouter.use("/create", function (req, res) {
  res.send("Добавления пользователя");
});
userRouter.use("/", function (req, res) {
  res.send("Список пользователей");
});
// сопоставляем роут с конечной точкой "/users"
app.use("/users", userRouter);

// общие обработчики
app.get("/about", function (req, res) {
  res.send("О сайте");
});

app.get("/", function (req, res) {
  res.send("Главная страница");
});

// обработка ошибок
app.use(function (req, res, next) {
  res.status(404).send("Not found");
});

app.listen(3000);
