const express = require('express');
const router = express.Router();
const { createPaymentIntent, savePayment, getPaymentsByCustomer } = require('../controllers/paymentController');
const { isAuthenticated } = require('../middleware/auths');

router.post('/create-payment-intent', isAuthenticated, createPaymentIntent);
router.post('/', isAuthenticated, savePayment);
router.get('/customer/:customerId', isAuthenticated, getPaymentsByCustomer);

module.exports = router;
