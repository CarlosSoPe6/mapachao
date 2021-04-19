const path = require('path');
const Mapache = require('../models/Mapache');

/**
 * GET /mapache
 * @param {Express.Request} req Request object
 * @param {Express.Response} res Response object
 */
async function getMapache(req, res) {
  try {
    const count = await Mapache.countDocuments();
    const random = Math.floor(Math.random() * count);
    const mapache = await Mapache.findOne().skip(random);
    const options = {
      headers: { 'Content-Type': 'image/png' },
    };

    res.sendFile(path.join(__dirname, '..', 'media', mapache.filename), options);
  } catch (err) {
    res.status(500).send('Server error');
  }
}

module.exports = {
  getMapache,
};
