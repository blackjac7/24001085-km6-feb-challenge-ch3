const express = require("express");
const router = express.Router();
const carRoute = require("./car");

router.use("/cars", carRoute);

module.exports = router;
