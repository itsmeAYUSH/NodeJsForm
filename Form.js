const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contuctusRoutes = require('./routes/contactus');
const successRoutes = require('./routes/success');
const Form = express();


Form.use(bodyParser.urlencoded({ extended: false }));
Form.use(express.static(path.join(__dirname,'public')));

Form.use("/admin", adminRoutes);
Form.use("/contactus", contuctusRoutes);
Form.use("/success", successRoutes);
Form.use("/", shopRoutes);

Form.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

Form.listen(3000);
