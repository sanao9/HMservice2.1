const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { roles } = require('../utils/constants');
const { validationResult } = require('express-validator');

exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    let role = roles.customer;
    if (req.body.email === "admin@gmail.com") {
      role = roles.admin;
    }

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      role,
    });

    await newUser.save();
    res.status(201).send("User registered successfully");
  } catch (err) {
    console.error("Error registering the user", err);
    res.status(500).send("Error registering the user: " + err.message);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "15d" }
    );

    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    });

    res.status(200).json({
      token,
      message: "Successfully logged in",
      data: { user: { ...user._doc, password: undefined }, role: user.role },
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Failed to login. Please try again later.", error: error.message });
  }
};

exports.logout = (req, res) => {
  res.clearCookie("accessToken");
  res.status(200).send({ message: "User logged out successfully" });
};

exports.userProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    console.error("Error getting user profile:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
