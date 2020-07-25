const os = require("os");
const greeting = require("./greeting");
const User = require("./user.js");

let userName = os.userInfo().username;
console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));

let pavel = new User("Pavel", 35);
pavel.sayHi();