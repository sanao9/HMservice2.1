// user.js
const mongoose = require("mongoose");
const { roles } = require('../utils/constants');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: [roles.admin, roles.customer],
    default: roles.customer,
    required: true
  },
  vehicles: [{
    type: Schema.Types.ObjectId,
    ref: 'Vehicle'
  }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
