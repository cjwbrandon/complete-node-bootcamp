const http = require("http");
const url = require("url");

// SERVER
// http.createServer(callback(request, response))
const server = http.createServer((req, res) => {
  // console.log(req);

  // Routing manually
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview")
    res.end("This is the OVERVIEW");
  else if (pathName === "/product") res.end("This is the PRODUCT!");
  else {
    // .writeHeader({statusCode}, {{headers}}) must be set before response
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

// server.listen({port}, {host}, callback{ran the moment server starts listening})
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
