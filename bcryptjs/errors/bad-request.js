const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api-error');

class BadReqeustError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCodes = StatusCodes.BAD_REQUEST; // 400
    }
}

module.exports = BadReqeustError;