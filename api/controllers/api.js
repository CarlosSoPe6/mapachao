const path = require("path");
const busboyHandler = require("../config/busboy");
const fileHandler = require("../utils/fileUploadHalder");
const Mapache = require("../models/Mapache");

/**
 * POST /
 * @param {Express.Request} req Request object
 * @param {Express.Response} res Response object
 */
function postRoot(req, res) {
    const { headers } = req;
    const now = new Date(Date.now());
    const filename = `${now.getTime()}.png`;
    const outPath = path.join(__dirname, "..", "media", filename);
    const busboyStream =busboyHandler.handleFileUpload(headers, fileHandler.saveFileAt(outPath), () => {
        Mapache.create(filename).then((doc) => {
            console.log("OK");
            res.end();
        }).catch((err) => {
            console.error(doc);
            res.status(500).end();
        })
    });
    req.pipe(busboyStream);
}

module.exports = {
    postRoot,
};
