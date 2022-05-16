require('dotenv').config();

const { StatusCodes } = require('http-status-codes');
const { BadReqeustError } = require('../errors');
const User = require('../models/User');

const registerUser = async (req, res) => {
    console.log(req.body);
    const { gender, name, email, password } = req.body;

    if (!gender || !name || !email || !password) {
        //http-status-codes 사용 될 경우
        throw new BadReqeustError("please provide all information");

        // 만약 http-status-codes가 없을 경우 바로 리턴
        // return res.status(StatusCodes.BAD_REQUEST).json({ msg: "please provide all information"})
    }

    const user = await User.create(req.body);
    console.log(user);
}

module.exports = { registerUser };