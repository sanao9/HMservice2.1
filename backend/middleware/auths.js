const jwt = require("jsonwebtoken");
const User = require("../models/user");
const ErrorResponse = require("../utils/errorResponse");

exports.isAuthenticated = async (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    console.log("Token not found in cookies");
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) {
      return next(new ErrorResponse("No user found with this id", 404));
    }
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return next(new ErrorResponse("Access denied, you must be an admin", 401));
  }
  next();
};
