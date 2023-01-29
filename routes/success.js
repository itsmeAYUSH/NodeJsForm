const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
    res.send('<h1>Form successfuly filled</h1>');
});
  

module.exports = router;
