const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/register", urlencodedParser, function (request, response) {
  response.sendFile(__dirname + "/register.html");
});

app.post("/register", urlencodedParser, function (request, response) {
  if (!request.body) return response.sendStatue(400);
  console.log(request.body);
  response.send(`${request.body.userName} - ${request.body.userAge}`);
});

app.get("/", function (request, response) {
  response.send("<h1>Главная страница</h1>");
});

app.listen(3000);
