const http = require("http");

// SERVER
// http.createServer(callback(request, response))
const server = http.createServer((req, res) => {
  // console.log(req);
  res.end("Hello from the server!");
});

// server.listen({port}, {host}, callback{ran the moment server starts listening})
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
