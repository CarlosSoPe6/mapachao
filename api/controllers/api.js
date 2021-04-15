const path = require("path");
const busboyHandler = require("../config/busboy");
const fileHandler = require("../utils/fileUploadHalder");

/**
 * POST /
 * @param {Express.Request} req Request object
 * @param {Express.Response} res Response object
 */
function postRoot(req, res) {
    const { headers } = req;
    const now = new Date(Date.now());
    const outPath = path.join(__dirname, "..", "media", `${now.getTime()}.png`);
    const busboyStream =busboyHandler.handleFileUpload(headers, fileHandler.saveFileAt(outPath), () => {
        res.end();
    });
    req.pipe(busboyStream);
}

module.exports = {
    postRoot,
};
