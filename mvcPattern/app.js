const express = require("express");
const app = express();
const userController = require("./controllers/userController");
const homeController = require("./controllers/homeController");

// определяем роутеры
const userRouter = express.Router();
const homeRouter = express.Router();

// определяем маршруты и их обработчики внутри роутера userRouter
userRouter.use("/create", userController.addUser);
userRouter.use("/", userController.getUsers);
app.use("/users", userRouter);

// определяем маршруты и их обработчики внутри роутера homeRouter
app.get("/about", homeController.about);
app.get("/", homeController.index);
app.use("/", homeRouter);

// обработка ошибок
app.use(function (req, res, next) {
  res.status(404).send("Not found");
});

app.listen(3000);
