const Payment = require('../models/Payment');
const Package = require('../models/package');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createPaymentIntent = async (req, res) => {
    try {
        const { packageId, customerId } = req.body;
        const selectedPackage = await Package.findById(packageId);
        if (!selectedPackage) {
            return res.status(404).send({ error: 'Package not found' });
        }
        const paymentIntent = await stripe.paymentIntents.create({
            amount: selectedPackage.price * 100, // Stripe uses the smallest currency unit
            currency: 'eur',
            metadata: { packageId, customerId },
        });
        res.send({
            clientSecret: paymentIntent.client_secret,
            paymentIntentId: paymentIntent.id,
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.savePayment = async (req, res) => {
    try {
        const payment = new Payment(req.body);
        await payment.save();
        res.status(201).send(payment);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getPaymentsByCustomer = async (req, res) => {
    try {
        const payments = await Payment.find({ customerId: req.params.customerId });
        res.send(payments);
    } catch (error) {
        res.status(500).send(error);
    }
};
