const { StatusCodes } = require("http-status-codes");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const User = require("../models/User");

const getUsers = async (req, res) => {
  console.log("get users called");
  const users = await User.find();
  res.status(StatusCodes.OK).send(users);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(StatusCodes.OK).send(user);
};

const removeUser = async (req, res) => {
  const { id } = req.params;
  await User.deleteOne({ _id: ObjectId(id) });
  res.status(StatusCodes.OK).json({ msg: "successfully deleted" });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, password, name, gender, introduction } = req.body;
  const user = await User.findByIdAndUpdate(
    id,
    {
      email,
      password,
      name,
      gender,
      introduction,
    },
    { new: true }
  );
  res.status(StatusCodes.OK).json(user);
};

module.exports = {
  getUsers,
  getUser,
  removeUser,
  updateUser,
};
