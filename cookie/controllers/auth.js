require('dotenv').config();

const User = require('../models/User');

const login = async(req, res) => {
	console.log(req.body);
	const { email, password } = req.body;

	const user = await User.findOne({ email });

}

module.exports = login;