const express = require("express");
const app = express();

app.get("/", function (request, response) {
  response.send("<h2>Привет Express!</h2>");
});
app.get("/about", function (request, response) {
  response.send("<h2>О сайте</h2>");
});
app.get("/contact", function (request, response) {
  response.send("<h2>Контакты</h2>");
});

app.listen(3000);
