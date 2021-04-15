const mongoose = require('mongoose');

const MapacheSchema = mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  // Add here more properties in the future
  // Tags
  // IsGif
  // Etc
});

const MapacheModel = mongoose.model('mapache', MapacheSchema);

/**
 * Creates a record in the database.
 * @param {String} filename Filename to store.
 * @returns {Promise<Boolean>} Prommise.
 */
async function create(filename) {
  const doc = new MapacheModel({ filename });
  return doc.save();
}

async function countDocuments() {
  return MapacheModel.countDocuments();
}

function findOne() {
  return MapacheModel.findOne();
}

module.exports = {
  countDocuments,
  findOne,
  create,
};
