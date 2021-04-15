const path = require("path");
const Busboy = require("busboy");

/**
 * Callback for the file event
 * @callback FileEventCallback
 * @param {string} fieldname
 * @param {NodeJS.ReadableStream} file
 * @param {string} fieldnameTruncated
 * @param {string} encoding
 * @param {string} mimetype
 * @returns {void}
 */

/**
 * Callback for the finish event
 * @callback FinishEventCallback
 * @returns {void}
 */


/**
 * Callback for the error event
 * @callback ErrorEventCallback
 * @returns {void}
 */


/**
 * 
 * @param {Object} headers Headers of the request
 * @param {FileEventCallback} onFileCb  File callback
 * @param {FinishEventCallback} onFinishCb Finish callback
 * @param {ErrorEventCallback} onErrorCb Error callback 
 * @returns {busboy.Busboy} Busboy
 */
function handleFileUpload(headers, onFileCb, onFinishCb) {
    const busboy = Busboy({headers: headers});
    console.log(busboy);
    busboy.on("file", onFileCb);
    busboy.on("finish", onFinishCb);
    return busboy;
}

module.exports = {
    handleFileUpload,
}
