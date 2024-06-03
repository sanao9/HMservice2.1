const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  vin: { type: String, required: true, unique: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
