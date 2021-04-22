const http = require("http");
const fs = require("fs");

http
  .createServer(function (request, response) {
    console.log(`Запрошенный адрес: ${request.url}`);
    const filePath = request.url.substr(1);
    fs.readFile(filePath, function (error, data) {
      if (error) {
        response.statusCode = 404;
        response.end("Resources not found!");
      } else {
        response.end(data);
      }
    });
  })
  .listen(5000, () => console.log("Server started at 5000"));

http
  .createServer(function (request, response) {
    console.log(`Запрошенный адрес: ${request.url}`);

    const filePath = request.url.substr(1);

    fs.access(filePath, fs.constants.R_OK, (err) => {
      if (err) {
        response.statusCode = 404;
        response.end("Resource not found!");
      } else {
        fs.createReadStream(filePath).pipe(response);
      }
    });
  })
  .listen(3000, () => console.log("Server started at 3000"));
