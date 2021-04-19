const path = require('path');
const Mapache = require('../models/Mapache');

/**
 * GET /mapache
 * @param {Express.Request} req Request object
 * @param {Express.Response} res Response object
 */
async function getMapache(req, res) {
  try {
    const mapache = await Mapache.getRandom();
    const options = {
      headers: { 'Content-Type': 'image/png' },
    };
    const filepath = path.join(__dirname, '..', 'media', mapache.filename);
    res.sendFile(filepath, options);
  } catch (err) {
    res.status(500).send('Server error');
  }
}

/**
 * GET /mapache/<tag>
 * @param {Express.Request} req Request object
 * @param {Express.Response} res Response object
 */
async function getMapacheByTag(req, res) {
  try {
    const tag = '';
    const mapache = await Mapache.getRandomByTag(tag);
    const options = {
      headers: { 'Content-Type': 'image/png' },
    };
    const filepath = path.join(__dirname, '..', 'media', mapache.filename);
    res.sendFile(filepath, options);
  } catch (err) {
    res.status(500).send('Server error');
  }
}
module.exports = {
  getMapache,
  getMapacheByTag,
};
