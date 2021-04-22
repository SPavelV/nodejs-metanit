const Emitter = require("events");
let emitter = new Emitter();
let eventName = "greet";
emitter.on(eventName, (data) => console.log(data));

emitter.on(eventName, () => console.log("Привет!"));

emitter.emit(eventName, "Приве пир");

class User extends Emitter {
  sayHi(data) {
    this.emit(eventName, data);
  }
}

let user = new User();
user.on(eventName, (data) => console.log(data));

user.sayHi("Мне нужна твоя одежда...");
