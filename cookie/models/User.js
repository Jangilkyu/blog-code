require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
	email: {
			type: String,
			required: [true, "email is missing"],
			unique: [true, "password is missing"],
	},
	password: {
			type: String,
			required: [true, "password is missing"],
	}
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
	console.log(candidatePassword);
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
}

module.exports = mongoose.model("User", UserSchema);