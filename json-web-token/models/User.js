require("dotenv").config();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
    {
        accountStatus: {
            type: String,
            enum: {
                values: ["active", "inactive", "deleted", "banned"],
                message: "{VALUE} is not supported",
            },
            default: 'active',
        },
        role: {
            type: String,
            enum: {
                values: ['user', 'admin'],
                message: "{VALUE} is not supported",
            },
            default: 'user',
        },
        email: {
            type: String,
            required: [true, "email is missing"],
            unique: [true, "email already exists"],      
        },
        password: {
            type: String,
            required: [true, "password is missing"],      
        },
        name: {
            type: String,
            required: [true, "name is missing"],
        },
        gender: {
            type: String,
            required: [true, "gender is missing"],
            enum: {
              values: ["male", "female"],
              message: "{VALUE} is not supported",
            },
        },
        introduction: {
            type: String,
            default: null,
          },
        },
        { timestamps: true }
    );

    UserSchema.pre('save', async function () {
        if (!this.isModified('password')) {
            return;
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    });

    UserSchema.methods.createAccessJWT = function() {
        return jwt.sign(
            {
                userId: this._id,
                role: this.role,
            },
            `${process.env.JWT_ACCESS_SECRET}.${process.env.JWT_ACCESS_VERSION}`,
            { expiresIn: process.env.JWT_ACCESS_LIFETIME }
            );
    };

    UserSchema.methods.comparePassword = async function (candidatePassword) {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    };

module.exports = mongoose.model('User', UserSchema);