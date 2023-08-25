// We can setup our server with just http module
// But have to put each endpoint for each resources-this will be a huge task in website with larger resoureces.
// to make our life easy - make use expressJs
// which is build on top of nodeJS, specifically on
// http module.

const http = require("http");
const { readFileSync } = require("fs");

const home = readFileSync("./navbar/index.html");
const styleHome = readFileSync("./navbar/styles.css");
const logo = readFileSync("./navbar/logo.png");
const navbarLogic = readFileSync("./navbar/navbar.js");

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
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(styleHome);
    res.end();
  } else if (url === "/logo.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(logo);
    res.end();
  } else if (url === "/navbar.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(navbarLogic);
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
