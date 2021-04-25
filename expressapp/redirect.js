const express = require("express");
const app = express();

app.use("/index", function (request, response) {
  response.redirect("https://metanit.com");
});

app.listen(3000);
