const fs = require("fs");
let readableStream = fs.createReadStream("hello.txt", "utf-8");

let writeableStream = fs.createWriteStream("some.txt");

readableStream.on("data", (chunk) => {
  writeableStream.write(chunk);
});

let writeableStream2 = fs.createWriteStream("some2.txt");
readableStream.pipe(writeableStream2);
