const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require('../util/path');


router.get("/add-product", (req, res, next) => {
  // res.send(
  //   '<form method="POST" action="/admin/add-product"> <input type="text" name="title"></input><input type="number" name="size"></input><button type="submit">Add Product</button></form>'
  // );
  res.sendFile(path.join(rootDir,'views','add-product.html'))
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
