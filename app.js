const http = require("http");
const { readFileSync } = require("fs");

const home = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  const url = req.url;

  // Home Page
  if (url === "/") {
    // Providing Header -- providing metadata about response
    res.writeHead(200, { "content-type": "text/html" });
    res.write(home);
    res.end();

    // About Page
  } else if (url === "/about") {
    // Providing Header -- providing metadata about response
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Frontend Engineer learning backend</h1>");
    res.end();
  }
  // Error Page
  else {
    // Providing Header -- providing metadata about response
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page Not Found!!!</h1>");
    res.end();
  }
});
server.listen(8000, () => {
  console.log("Port:8000");
});
