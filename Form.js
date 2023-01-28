const express = require("express");
const bodyParser = require("body-parser");

const Form = express();

Form.use(bodyParser.urlencoded({ extended: false }));

Form.use("/add-product", (req, res, next) => {
  res.send(
    '<form method="POST" action="/product"> <input type="text" name="title"></input><input type="number" name="size"></input><button type="submit">Add Product</button></form>'
  );
});
Form.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

Form.use("/", (req, res, next) => {
  res.send("<h1>Hello from expressJs</h1>");
});

Form.listen(3000);
