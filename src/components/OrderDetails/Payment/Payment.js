import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const Payment = ({handlePayment}) => {
    const stripePromise = loadStripe('pk_test_51IeKeEDx0PfypUGN5o9Oorcx6WhRHq5LFHcXWa5xJ0214H1yQQevgvou6az9UI2MoGq8GwiBvAjglPWbtSKGwvbA00IGqs6Y4K');
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
            </Elements>
        </div>
    );
};

export default Payment;