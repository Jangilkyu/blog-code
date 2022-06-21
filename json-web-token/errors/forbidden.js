const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api-error");

class ForbiddenError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.FORBIDDEN;
  }
}

module.exports = ForbiddenError;
