const { response } = require("express");
const express = require("express");
const app = express();

app.get("/about", function (request, response) {
  response.send("<h1>О сайте</h1>");
});

app.use("/contact", function (request, response) {
  response.send("<h1>Контакты</h1>");
});

app.get("/", function (request, response) {
  response.send("<h1>Главная страница</h1>");
});

// "/bk" || "/bok"
app.get("/bo?k", function (request, response) {
  response.send(request.url);
});

// "/bok" || "/book" || "/booooooook"
app.get("/bo+k", function (request, response) {
  response.send(request.url);
});

// "/bork" || "/bonk" || "/bor.bak" || "/bor/ok"
app.get("/bo*k", function (request, response) {
  response.send(request.url);
});

// "/book" || "/book.html"
app.get("/book(.html)?", function (request, response) {
  response.send(request.url);
});

// регулярные выражения
app.get(/.*(\.)html$/, function (request, response) {
  response.send(request.url);
});

app.listen(3000);
