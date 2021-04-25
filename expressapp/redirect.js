const express = require("express");
const app = express();

// redirect on http://localhost:3000/home
app.use("home/foo/bar", function (requrest, response) {
  response.redirect("..");
});

// redirect on http://localhost:3000/home/foo
app.use("/home/foo/bar", function (request, response) {
  response.redirect(".");
});

// redirect on http://localhost:3000/home/about
app.use("/home/foo/bar", function (request, response) {
  response.redirect("../about");
});

// redirect on http://localhost:3000/home/foo/about
app.use("/home/foo/bar", function (request, response) {
  response.redirect("./about");
});

// redirect on http://localhost:3000/about
app.use("/home/bar", function (request, response) {
  response.redirect("/about");
});

// redirect on http://localhost:3000/home/about
app.use("/home/bar", function (request, response) {
  response.redirect("about");
});

app.use("/about", function (request, response) {
  response.send("<h1>About</h1>");
});

app.listen(3000);
