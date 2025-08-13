import http from "node:http";
import { ditto } from "./pokemon/ditto.js";

const processRequest = (request, response) => {
  const { url, method } = request;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          response.setHeader("Content-Type", "text/html; charset=utf-8");
          return response.end(JSON.stringify(ditto));
        case "":

        default:
          response.statusCode = 404;
          response.setHeader("Content-Type", "text/html; charset=utf-8");
          return response.end("<h1>Not Found</h1>");
      }

    case "POST":
      switch (url) {
        case "/pokemon": {
          let body = "";

          request.on("data", (chunk) => {
            body += chunk.toString();
          });

          request.on("end", () => {
            const data = JSON.parse(body);
            // llamar a una base de datos para guardar el nuevo pokemon
            response.writeHead(201, {
              "Content-Type": "application/json; charset=utf-8",
            });
            response.end(JSON.stringify(data));
          });

          break;
        }

        default:
          response.statusCode = 404;
          response.setHeader("Content-Type", "text/plain; charset=utf-8");
          return response.end("404 Not Found");
      }
  }
};

const server = http.createServer(processRequest);

server.listen(3000, () => {
  console.log("server is listening on port http://localhost:3000");
});
