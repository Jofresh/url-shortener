const express = require("express");
const router = express.Router();

const shortController = require("../controllers");

router.get("/", shortController.findAll);

router.post("/shortUrls", shortController.createShort);

router.get("/:shortUrl", shortController.find);

module.exports = router;
