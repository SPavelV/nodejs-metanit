const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use("/contact", function (reques, response) {
  response.render("contact", {
    title: "Мои контакты",
    emailsVisible: true,
    emails: ["blabla@corp.com", "wtf@gmail.com"],
    phone: "+77777777777",
  });
});

app.use("/", function(request, response){
    response.send("Главная страница");
})

app.listen(3000);