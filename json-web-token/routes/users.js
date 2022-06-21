const express = require("express");
const router = express.Router();

const updateUser = require("../controllers/users");

  router.route("/:id").patch(updateUser);

module.exports = router;
