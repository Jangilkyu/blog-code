const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api-error');

class UnauthenciatedError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCodes = StatusCodes.UNAUTHORIZED; // 401
    }
}

module.exports = UnauthenciatedError;