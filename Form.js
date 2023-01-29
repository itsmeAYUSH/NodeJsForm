const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const Form = express();

Form.use(bodyParser.urlencoded({ extended: false }));

Form.use("/admin", adminRoutes);
Form.use("/shop", shopRoutes);

Form.use((req, res, next) => {
  res.status(404).send("<h1>Page not Found</h1>");
});

Form.listen(3000);
