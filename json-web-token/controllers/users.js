const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, name, gender, introduction } = req.body;
  const user = await User.findByIdAndUpdate(
    id,
    {
      email,
      name,
      gender,
      introduction,
    },
    { new: true }
  );
  res.status(StatusCodes.OK).json(user);
};


module.exports = updateUser;