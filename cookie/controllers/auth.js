require('dotenv').config();

const User = require('../models/User');
const hour = 3600000;

const {
    BadReqeustError,
    UnauthenciatedError,
    ForbiddenError,
} = require('../errors');
const { StatusCodes } = require('http-status-codes');

const login = async(req, res) => {
    const { email, password } = req.body;

	if (!email || !password) {
        throw new BadReqeustError('email and password missing');
    }

	const user = await User.findOne({ email });

    console.log(user);
    
	const isPasswordCorrect = await user.comparePassword(password);
    
    if (!isPasswordCorrect) {
        throw new UnauthenciatedError('invalid credentials');
    };

    res.status(StatusCodes.OK);
    res.cookie('loginAuth','value', {
        expires: new Date(Date.now() + hour),
        signed:true
    }).send('success');
}

module.exports = login;