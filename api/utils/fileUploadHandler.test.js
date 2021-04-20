const { FileUploadHandlerException, saveFileAt } = require('./fileUploadHalder');

describe('FileUploadHandlerException', () => {
  describe('Message stored', () => {
    it('Sets the error message from constructor', () => {
      const message = 'This is an error';
      const ex = new FileUploadHandlerException(message);
      expect(ex.message).toBe(message);
    });
  });
});

describe('saveFileAt', () => {
  describe('Errors', () => {
    const mimeType = 'image/png';
    const encoding = 'ISO';
    it('Throw error for invalid mimetype', () => {
      const outputFile = 'test.txt';
      const acceptedMimetypes = ['application/javascript', 'text/txt'];
      const cb = saveFileAt(outputFile, acceptedMimetypes, undefined);
      expect(() => cb(null, null, false, encoding, mimeType)).toThrowError();
    });
    it('Throw error for invalid encoding', async () => {
      const outputFile = 'test.txt';
      const acceptedEncodings = ['utf8'];
      const cb = saveFileAt(outputFile, undefined, acceptedEncodings);
      expect(() => cb(null, null, false, encoding, mimeType)).toThrowError();
    });
  });
});
