const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api");
const busboyHandler = require("../config/busboy");

router.post("/", apiController.postRoot);

module.exports = router;