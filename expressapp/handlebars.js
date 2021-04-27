const express = require("express");
const app = express();

app.set("view engine", "hbs");
app.set("views", "templates"); // установка пути к представлениям

app.use("/contact", function (request, response) {
  response.render("contact.hbs", {
    title: "Мои контакты",
    emailsVisible: true,
    emails: ["gavaga@mycorp.com", "mioaw@mycorp.com"],
    phone: "+1234567890",
  });
});

app.use("/", function (request, response) {
  response.send("Главная страница");
});

app.listen(3000);
