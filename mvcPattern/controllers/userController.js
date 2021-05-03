const User = require("../models/user.js");

exports.addUser = function (req, res) {
  res.render("create.hbs");
};

exports.getUsers = function (req, res) {
  res.render("users.hbs", {
    users: User.getAll(),
  });
};

exports.postUser = function (req, res) {
  const username = req.body.name;
  const userage = req.body.age;
  const user = new User(username, userage);
  user.save();
  res.redirect("/users");
};
