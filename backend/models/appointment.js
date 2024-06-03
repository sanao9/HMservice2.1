const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  vehicleId: { type: Schema.Types.ObjectId, ref: 'Vehicle', required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  servicePackage: { type: Schema.Types.ObjectId, ref: 'Package', required: true },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
