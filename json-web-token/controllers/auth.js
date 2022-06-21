require('dotenv').config();

const { StatusCodes } =require('http-status-codes');
const User = require('../models/User');

const {
  BadRequestError,
  UnauthenticatedError,
} = require('../errors');

const registerUser = async (req, res) => {
    const { gender, name, email, password } = req.body;
    if (!gender, !name, !email, !password) {
        throw new BadRequestError('please provide all information');
    }

    const user = await User.create(req.body);
    const accessToken = user.createAccessJWT();

    res.status(StatusCodes.CREATED)
    .setHeader('accesstoken', accessToken)
    .json(user);
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new BadRequestError("email and password missing");
    }
    const user = await User.findOne({ email });
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new UnauthenticatedError("invalid credentials");
    }
    const accessToken = user.createAccessJWT();
    res.status(StatusCodes.OK).setHeader("accesstoken", accessToken).json(user);
  };
  

module.exports = { registerUser,loginUser };