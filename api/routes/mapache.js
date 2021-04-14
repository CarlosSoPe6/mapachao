const express = require("express");
const router = express.Router();
const path = require("path");
const { nextTick } = require("process");

const Mapache = require("../models/Mapache");

// @route       GET /mapache or /raccoon
// @desc        Get a random raccoon
// @access      Public
router.get("/", async (req, res) => {
  try {
    const count = await Mapache.countDocuments();
    const random = Math.floor(Math.random() * count);
    const mapache = await Mapache.findOne().skip(random);
    const options = {
      headers: { "Content-Type": `image/png` }
    };

    res.sendFile(path.join(__dirname, "..", "media", mapache.filename), options);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
