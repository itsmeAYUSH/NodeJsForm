const path = require("path");
const rootDir = require("../util/path");

exports.contactRoute = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
};
