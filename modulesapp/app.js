// получаем модуль Express
const express = require("express");
// создаем приложение
const app = express();


// устанавилваем обработчик для маршрута "/"
app.get("/", function(req, res){
  res.end("Hello from Express")
});

// начинаем прослушивать подключение на 3000 порту
app.listen(3000);