const mongoose = require('mongoose');

const MapacheSchema = mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: false,
  },
  // Add here more properties in the future
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

async function countDocuments(filter) {
  if (filter === undefined) {
    return MapacheModel.countDocuments();
  }
  return MapacheModel.countDocuments(filter);
}

function findOne(filter) {
  if (filter === undefined) {
    return MapacheModel.findOne();
  }
  return MapacheModel.findOne(filter);
}

async function getRandom() {
  const count = await countDocuments();
  const random = Math.floor(Math.random() * count);
  const mapache = await findOne().skip(random);
  return mapache;
}

async function getMapacheByTag(tag) {
  // Diable for querying
  // eslint-disable-next-line quote-props
  const count = await countDocuments({ 'tags': tag });
  const random = Math.floor(Math.random() * count);
  const mapache = await findOne().skip(random);
  return mapache;
}

module.exports = {
  countDocuments,
  findOne,
  create,
  getRandom,
  getMapacheByTag,
};
