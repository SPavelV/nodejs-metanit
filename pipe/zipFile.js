const fs = require("fs");
const zlib = require("zlib");

const readableStream = fs.createReadStream("hello.txt", "utf-8");
const writeableStream = fs.createWriteStream("hello.txt.gz");

let gzip = zlib.createGzip();

readableStream.pipe(gzip).pipe(writeableStream);
