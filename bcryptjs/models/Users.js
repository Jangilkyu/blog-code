require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");


const UserSchema = new mongoose.Schema({
        // 메타데이터
        accountStatus: {
            type: String,
            enum: {
                values: ['active', 'inactive', 'deleted', 'banned'],
                message: '{VALUE} is not supported',
            },
            default: 'active',
        },
    
        role: {
            type: String,
            enum: {
                values: ['user', 'admin'],
                message: '{VALUE} is not supported',
            },
            default: 'user',
        },
    
      email: {
          type: String,
          required: [true, 'email is missing'],
          unique: [true, 'email already exists'],
      },
    
      password: {
          type: String,
          required: [true, 'password is missing'],
      },
    
      name: {
          type: String,
          required: [true, 'name is missing'],
      },
    
      gender: {
          type: String,
          required: [true, 'gender is missing'],
          enum: {
              values: ['male', 'female'],
              message: '{VALUE} is not supported',
          },
      },
    
      introduction: {
          type: String,
          default: null,
      },
    }, 
        {timestamps: true}    
);

UserSchema.pre("save", async function () {
    if (!this.isModified("password")) {
      return;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });

module.exports = mongoose.model('User', UserSchema);