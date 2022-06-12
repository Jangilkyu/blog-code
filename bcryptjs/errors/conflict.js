const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api-error');

class ConflictError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCodes = StatusCodes.CONFLICT; // 409
    }
}

module.exports = ConflictError;