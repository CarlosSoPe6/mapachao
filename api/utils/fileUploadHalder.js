const fs = require("fs");

/**
 * Callback for the file event.
 * @callback FileEventCallback
 * @param {string} fieldname fieldname.
 * @param {NodeJS.ReadableStream} file file.
 * @param {boolean} fieldnameTruncated fieldnameTruncated.
 * @param {string} encoding encoding.
 * @param {string} mimetype mimetype.
 * @returns {void} None.
 */

/**
 * Writes a file in the specified location and name.
 * @param {Array<String>?} acceptedEncodings Mimetypes to accept.
 * @param {Array<String>?} acceptedMimetypes Emcoding to accept.
 * @param {string} outputFile File to write.
 * @returns {FileEventCallback} Event handler.
 */
function saveFileAt(outputFile, acceptedMimetypes, acceptedEncodings) {
    return (fieldname, file, fieldnameTruncated, encoding, mimetype) => {
        if (acceptedEncodings !== undefined) {
            if (acceptedEncodings.indexOf(encoding) === -1) {
                throw new FileUploadHandlerException(`Encoding ${encoding} not supported`);
            }
        }
    
        if (acceptedMimetypes !== undefined) {
            if (acceptedMimetypes.indexOf(mimetype) === -1) {
                throw new FileUploadHandlerException(`MimeType ${encoding} not supported`);
            }
        }
        file.pipe(fs.createWriteStream(outputFile));
    }
};

/**
  * Exception for file handing.
  * @param {string} message Error message.
  */
class FileUploadHandlerException extends Error {
    constructor(message) {
        this.message = message;
        this.name = "FileUploadHandlerException";
        // Use V8's native method if available, otherwise fallback
        if ("captureStackTrace" in Error) {
            Error.captureStackTrace(this, InvalidArgumentException);
        } else {
            this.stack = (new Error()).stack;
        }
    }
}

module.exports = {
    saveFileAt,
};
