import http from "node:http";
import { findAvailablePort } from "./10-free-port.js";

// console.log(process.env);

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, resp) => {
  console.log("request received");
  resp.end("Hello World");
});

/* server.listen(3000, () => {
  console.log("server is listening on port 3000");
}); */

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
});
