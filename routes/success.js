const express = require("express");
const router = express.Router();

const successController = require('../controllers/success');

router.post("/", successController.success);

module.exports = router;
