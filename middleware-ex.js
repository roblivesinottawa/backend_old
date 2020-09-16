const express = require("express");
const app = express();
const port = 5000;

app.get("/", log, hello);

function log(req, res, next) {
  console.log(new Date(), req.method, req.url);
  next();
}

function hello(req, res, next) {
  res.write(`Hello World`);
  res.end();
  next();
}

app.listen(port, () => console.log(`server started on port ${port}`));
