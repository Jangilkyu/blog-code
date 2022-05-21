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

    // res.status(StatusCodes.OK).setHeader('Set-Cookie', 'visited=true; Max-Age=1000; HttpOnly').send('hello');

    res.status(StatusCodes.OK);
    res.cookie('token','a', {
        expires: new Date(Date.now() + hour),
        signed:true
    }).send('aa');
}

module.exports = login;