const http = require("http");
const fs = require("fs");

http
  .createServer(function (request, response) {
    fs.readFile("index.html", "utf-8", function (error, data) {
      const message = "Изучаем Node.js";
      const header = "Главная страница";

      data = data.replace("{header}", header).replace("{message}", message);

      response.end(data);
    });
  })
  .listen(3000);
