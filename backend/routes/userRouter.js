const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

// Define routes
router.route("/").get(getUsers);
router.route("/:id").get(getUserById).delete(deleteUser).put(updateUser);

module.exports = router;
