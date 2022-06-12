require('dotenv').config();

const { StatusCodes } = require('http-status-codes');
const User = require('../models/Users');
const {
    BadRequestError,
} = require('../errors');

const registerUser = async (req, res) => {
    const { gender, name, email, password } = req.body;
    
    if (!gender || !name || !email || !password) {
        throw new BadRequestError("please provide all information");
    }

    const user = await User.create(req.body);

    res
      .status(StatusCodes.CREATED)
      .json(user);
};

module.exports = {
    registerUser,
};