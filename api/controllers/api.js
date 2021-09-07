const path = require('path');
const busboyHandler = require('../config/busboy');
const fileHandler = require('../utils/uploadHalder');
const Mapache = require('../models/Mapache');

/**
 * POST /
 * @param {Express.Request} req Request object
 * @param {Express.Response} res Response object
 */
function postRoot(req, res) {
  const { headers } = req;
  const now = new Date(Date.now());
  const filename = `${now.getTime()}.png`;
  const outPath = path.join(__dirname, '..', 'media', filename);
  const tags = [];
  const busboyStream = busboyHandler.handleFileUpload(
    headers,
    fileHandler.processField((fieldName, value) => {
      if (typeof (value) !== 'string') {
        return;
      }
      const splittedValue = value.split(',');
      if (fieldName === 'tags') {
        try {
          const parsedTags = JSON.parse(value).tags;
          tags.push(...parsedTags);
        } catch (e) {
          console.error(e);
        }
      }
    }),
    fileHandler.saveFileAt(outPath),
    () => {
      console.log(filename, tags);
      Mapache.create(filename, tags).then(() => {
        res.end();
      }).catch(() => {
        res.status(500).end();
      });
    },
  );
  req.pipe(busboyStream);
}

module.exports = {
  postRoot,
};
