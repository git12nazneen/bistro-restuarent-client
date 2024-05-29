import React from 'react';
import SectionTitle from '../../../shared/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutFrom from './CheckOutFrom';

// TODO add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading='Take e place' subheading='Payment'></SectionTitle>
           <div>
            <Elements stripe={stripePromise}>
                <CheckOutFrom></CheckOutFrom>
            </Elements>
           </div>
        </div>
    );
};

export default Payment;