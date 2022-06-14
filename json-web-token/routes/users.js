const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUser,
  removeUser,
  updateUser,
} = require("../controllers/users");

router.route("/").get(getUsers);
router.route("/:id").get(getUser).delete(removeUser).patch(updateUser);

module.exports = router;
