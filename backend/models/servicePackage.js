
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const servicePackageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const ServicePackage = mongoose.model('ServicePackage', servicePackageSchema);
module.exports = ServicePackage;
