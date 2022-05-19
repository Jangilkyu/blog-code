require('dotenv').config();

const mongoose=require('mongoose');

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

module.exports = mongoose.model("User", UserSchema);