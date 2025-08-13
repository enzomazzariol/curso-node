import fs from "node:fs";
import http from "node:http";

const desiredPort = process.env.PORT ?? 3000;

const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  if (req.url === "/") {
    res.statusCode = 200; // 200 OK
    res.end("<h1>Bienvenido a mi tercer servidor HTTP</h1>");
  } else if (req.url === "/contacto") {
    res.statusCode = 200;
    res.end(`<h1>Hola, soy un servidor HTTP</h1>
    <p>Este es mi página de contacto</p>
    <p>Puedes contactarme en <a href="mailto:mazza@example.com">mazza@example.com</a></p>`);
  } else if (req.url === "/imagen") {
    fs.readFile("./Calvin-and-Hobbes.jpg", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("<h1>Error 500: Internal Server Error</h1>");
      } else {
        res.setHeader("Content-Type", "image/jpeg");
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404; // 404 Not Found
    res.end("<h1>La página que buscas no existe</h1>");
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`server is listening on port http://localhost:${desiredPort}`);
});
