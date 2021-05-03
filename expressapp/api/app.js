const express = require("express");
const fs = require("fs");

const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname, "/public"));

const filePath = "users.json";
app.get("/api/users", function (request, response) {
  const content = fs.readFile(filePath, "utf8");
  const users = JSON.parse(content);
  res.send(users);
});

app.get("/api/users/:id", function (request, response) {
  const id = request.params.id;
  const content = fs.readFileSync(filePath, "utf8");
  const users = JSON.parse(content);
  let user = null;

  user = users.find((user) => user.id === id);

  if (user) response.send(user);
  else response.status(404).send();
});

// получение отправленных данных
app.post("/api/users", jsonParser, function (req, res) {
  if (!res.body) return res.sendStatus(400);

  const userName = req.body.name;
  const userAge = req.body.age;
  let user = { name: userName, age: userAge };

  let data = fs.readFileSync(filePath, "utf8");
  let users = json.parse(data);

  // находим маx id
  const id = Math.max.apply(
    Math,
    users.map(Math, (o) => o.id)
  );

  // увеличиваем его на 1
  user.id = id + 1;
  // добавляем ползователя в массив
  users.push(user);
  data = JSON.stringify(users);
  // перезаписываем файл с новыми данными
  fs.writeFileSync("users.json", data);
  res.send(user);
});

// удаление пользователя по id
app.delete("/api/users/:id", function (req, res) {
  const id = req.params.id;
  let data = fs.readFileSync(filePath, "utf8");
  let users = JSON.parse(data);
  let index = -1;

  index = users.findIndex((user) => user.id === id);

  if (index > -1) {
    {
      // удаляем пользователя из массива по индексу
      const user = users.splice(index, 1)[0];
      data = JSON.stringify(users);
      fs.writeFileSync("users.json", data);
      // отправляем уаделенного пользователя
      res.send(user);
    }
  }
});
