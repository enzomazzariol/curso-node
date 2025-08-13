import express from "express";
import { ditto } from "./pokemon/ditto.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json()); // Middleware para parsear JSON en el cuerpo de las peticiones

/* app.use((req, res, next) => {
  if (req.method !== "POST") return next();
  if (req.headers["content-type"] !== "application/json") return next();

  // Solo llegan request que son POST y que tienen el header Content-Type: application/json
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const data = JSON.parse(body);
    data.timestamp = Date.now();

    // mutar la request y meter la info en el request.body
    req.body = data;
    next();
  });
});
*/

app.get("/pokemon/ditto", (req, res) => {
  res.json(ditto);
});

app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body);
});

app.use((req, res) => {
  res.status(404).send("<h1>Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
