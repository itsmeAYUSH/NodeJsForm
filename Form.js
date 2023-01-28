// const http = require("http");

const express = require("express");
const Form = express();

Form.use((req, res, next) => {
  console.log("sup");
  next();
});

Form.use((req, res, next) => {
  console.log("sup again");
    res.send("<h1>Hello from expressJs</h1>");
//   res.send({ key1: "value" });
});

// const server = http.createServer(app);
// server.listen(3000);
Form.listen(3000);
