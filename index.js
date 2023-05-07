const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function (request, response) {
  if (request.url === "/style.css") {
    // Serve the CSS file
    const css = fs.readFileSync("./style.css", "utf8");
    response.setHeader("Content-Type", "text/css");
    response.end(css);
  } else {
    // Serve the HTML file
    const html = fs.readFileSync("./index.html", "utf8");
    response.setHeader("Content-Type", "text/html");
    response.end(html);
  }
});

server.listen({ port: 3000, host: "localhost" }, function () {
  console.log("Server is running!");
});
