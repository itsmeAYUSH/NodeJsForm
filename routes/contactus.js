const express = require("express");
const router = express.Router();
// const path = require("path");
// const rootDir = require("../util/path");

const contactController = require("../controllers/contact");

router.get("/", contactController.contactRoute);

module.exports = router;
