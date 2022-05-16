require('dotenv').config();

const { StatusCodes } = require('http-status-codes');
const User = require('../models/User');
const CustomAPIError = require('./custom-api-error');

class BadReqeustError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.StatusCodes = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadReqeustError;