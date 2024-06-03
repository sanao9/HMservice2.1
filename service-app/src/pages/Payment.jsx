import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PMGqg08RZKbSGmS5z4bJmt72hsiATKu2xyb9zmOHwL9vxQ2JRNEJjfj14R65eyDYNtsxoE5lobgeQSErk2uzhxO00jzeV15cK');

const Payment = () => {
    const [packages, setPackages] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        axios.get('/packages')
            .then(response => setPackages(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleSelectPackage = async (pkg) => {
        setSelectedPackage(pkg);
        const response = await axios.post('/create-payment-intent', {
            packageId: pkg._id,
            customerId: 'customer-id', // Replace with actual customer ID from authentication
        });
        setClientSecret(response.data.clientSecret);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const cardElement = elements.getElement(CardElement);
        const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: 'Customer Name', // Replace with actual customer details from authentication
                },
            },
        });

        if (error) {
            console.error(error);
        } else {
            const paymentData = {
                customerId: 'customer-id', // Replace with actual customer ID from authentication
                packageId: selectedPackage._id,
                amount: paymentIntent.amount,
                currency: paymentIntent.currency,
                paymentIntentId: paymentIntent.id,
                status: paymentIntent.status,
            };
            await axios.post('/save-payment', paymentData);
            alert('Payment successful!');
        }
    };

    return (
        <div>
            <h1>Packages</h1>
            {packages.map(pkg => (
                <div key={pkg._id}>
                    <h2>{pkg.name}</h2>
                    <img src={pkg.image} alt={pkg.name} />
                    <p>{pkg.description}</p>
                    <p>Prix: €{pkg.price}</p>
                    <button onClick={() => handleSelectPackage(pkg)}>Acheter</button>
                </div>
            ))}

            {selectedPackage && clientSecret && (
                <Elements stripe={stripePromise}>
                    <form onSubmit={handleSubmit}>
                        <CardElement />
                        <button type="submit" disabled={!stripe}>Payer</button>
                    </form>
                </Elements>
            )}
        </div>
    );
};

export default Payment;
