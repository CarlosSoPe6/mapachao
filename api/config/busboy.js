const Busboy = require('busboy');

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
 * Callback for the field event.
 * @callback FieldEventCallback
 * @param {string} fieldname fieldname.
 * @param {any} val val.
 * @returns {void} None.
 */

/**
 * Callback for the finish event
 * @callback FinishEventCallback
 * @returns {void}
 */

/**
 * Callback for the error event
 * @callback ErrorEventCallback
 * @param {string} fieldname
 * @param {string|number} value
 * @returns {void}
 */

/**
 *
 * @param {Object} headers Headers of the request
 * @param {FileEventCallback | undefined | null} onFileCb  File callback
 * @param {FieldEventCallback | undefined | null} onFieldCb Finish callback
 * @param {FinishEventCallback | undefined | null} onFinishCb Finish callback
 * @param {ErrorEventCallback} onErrorCb Error callback
 * @returns {busboy.Busboy} Busboy
 */
function handleFileUpload(headers, onFieldCb, onFileCb, onFinishCb) {
  const busboy = Busboy({ headers });

  if (onFieldCb !== undefined && onFieldCb !== null && typeof onFieldCb === 'function') {
    busboy.on('field', onFieldCb);
  }

  if (onFileCb !== undefined && onFileCb !== null && typeof onFileCb === 'function') {
    busboy.on('file', onFileCb);
  }

  if (onFinishCb !== undefined && onFinishCb !== null && typeof onFinishCb === 'function') {
    busboy.on('finish', onFinishCb);
  } else {
    throw new Error('Finish event not handled or is not a function');
  }
  return busboy;
}

module.exports = {
  handleFileUpload,
};
