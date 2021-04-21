const Emitter = require("events");
let emitter = new Emitter();
let eventName = "greet";
emitter.on(eventName, (data) => console.log(data));

emitter.on(eventName, () => console.log("Привет!"));

emitter.emit(eventName, "Приве пир");
