const mongoose = require("mongoose");

const MapacheSchema = mongoose.Schema({
  filename: {
    type: String,
    required: true
  }
  // Add here more properties in the future
  // Tags
  // IsGif
  // Etc
});

module.exports = mongoose.model("mapache", MapacheSchema);
