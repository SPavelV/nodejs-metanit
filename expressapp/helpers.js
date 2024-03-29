const express = require("express");
const hbs = require("hbs");

const app = express();

hbs.registerHelper("getTime", function () {
  const myDate = new Date();
  const hour = myDate.getHours();
  const minute = myDate.getMinutes();
  const second = myDate.getSeconds();
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  return `Текущее время: ${hour}:${minute}:${second}`;
});

hbs.registerHelper("createStringList", function (array) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += `<li>${result}</li>`;
  }

  return new hbs.SafeString(`<ul>${result}</ul>`);
});

app.set("view engine", "hbs");

app.get("/", function (request, response) {
  response.render("home2.hbs", {
    fruit: ["apple", "lemon", "banan", "grape"],
  });
});

app.listen(3000);
