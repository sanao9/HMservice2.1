const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceHistorySchema = new Schema({
  vehicle: { type: Schema.Types.ObjectId, ref: 'Vehicle', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  serviceDate: { type: Date, required: true },
  details: { type: String, required: true },
});

module.exports = mongoose.model('ServiceHistory', serviceHistorySchema);
