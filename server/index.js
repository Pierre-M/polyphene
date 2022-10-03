const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const fs = require("node:fs");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

let count = 0;

app.get("/count", (request, response) => {
  response.setHeader("Content-Type", "application/json");
  response.send(JSON.stringify({ amount: count }));
});

app.post("/count/add", (request, response) => {
  count = request.body.amount;
  response.setHeader("Content-Type", "application/json");
  response.send(JSON.stringify({ amount: count }));
});

app.get("/cake/list", (request, response) => {
  const rawdata = fs.readFileSync(`${__dirname}/assets/cakes.json`);
  const cakes = JSON.parse(rawdata);
  response.setHeader("Content-Type", "application/json");
  response.send(JSON.stringify({ cakes }));
});

app.listen(3001, () =>
  // eslint-disable-next-line no-console
  console.log("Express server is running on localhost:3001")
);
