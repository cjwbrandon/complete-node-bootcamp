const http = require("http");
const url = require("url");

// Executed once - Fine to use Sync and block at the beginning
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

// SERVER
// http.createServer(callback(request, response))
const server = http.createServer((req, res) => {
  // console.log(req);

  // Routing manually
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview")
    res.end("This is the OVERVIEW");
  else if (pathName === "/product") res.end("This is the PRODUCT!");
  else if (pathName === "/api") {
    // Note: . depends on the directory that you run the script from
    // Note: __dirname always refer to the directory of the current file
    // Avoid writing here as it gets executed each time a request is made
    // fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
    //   const productDate = JSON.parse(data);
    //   res.writeHead(200, { "Content-type": "application/json" });
    //   res.end(data);
    // });
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
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
