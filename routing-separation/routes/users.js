const express = require("express")
const router = express.Router();

const { getUser, getUsers, createUser, updateUser, removeUser } = require("../controllers/users");

router.route("/")
      .get(getUsers)
      .post(createUser);

router.route("/:id")
      .get(getUser)
      .patch(updateUser)
      .delete(removeUser);

module.exports = router;
