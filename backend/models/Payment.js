const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    customerId: { type: String, required: true },
    packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    paymentIntentId: { type: String, required: true },
    status: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', paymentSchema);
