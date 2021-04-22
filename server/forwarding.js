const http = require("http");
http
  .createServer(function (request, response) {
    response.setHeader("Content-type", "text/html; charset=utf-8");

    if (request.url === "/") {
      response.statusCode = 302; // временная переадресация
      // на адрес localhost:3000/newpage
      response.setHeader("Location", "/newpage");
    } else if (request.url === "/newpage") {
      response.write("<h2>New address</h2>");
    } else {
      response.statusCode = 404; // адрес не найден
      response.write("<h2>Not found</h2>");
    }
    response.end();
  })
  .listen(3000);
