import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCard from '../../../hooks/useCard';
import UseAuth from '../../../hooks/UseAuth';
import toast from 'react-hot-toast';

const CheckOutFrom = () => {
    const stripe = useStripe();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('')
    const {user} = UseAuth()
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCard();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(()=>{
      if(totalPrice>0){
        axiosSecure.post('/create-payment-intent',{price: totalPrice})
        .then(res =>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
      }
    },[axiosSecure, totalPrice])

    const handleSubmit = async (event)=>{
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement)

        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })

        if(error){
            console.log('payment error', error)
            setError(error.message);
        }
        else{
            console.log('payment method',paymentMethod )
            setError('');
        }

        // confirm payment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
          payment_method:{
            card: card,
            billing_details:{
              email:user?.email || 'anonymous',
              name: user?.displayName || 'anonymous',
            }
          }
        })
        if(confirmError){
          console.log('confirm error')
        }
        else{
          console.log(paymentIntent, 'payment intent')
          if(paymentIntent.status === 'succeeded'){
            console.log('transaction id', paymentIntent.id)
            setTransactionId(paymentIntent.id);
            // now save the payment in the db db
            const payment = {
              email: user.email,
              price: totalPrice,
              transactionId: paymentIntent.id,
              date: new Date(),
              cartId: cart.map(item=> item._id),
              menuItemId: cart.map(item => item.menuId), 
              status:'pending'
            }
            const res = await axiosSecure.post('/payments', payment);
            console.log('payment saved',res.data)
            if(res.data?.paymentResult?.insertedId){
              refetch()
              // toast.success('Thanks for payment')
              alert('succeess')
            }
          }
        }

    }

    return (
        <form onSubmit={handleSubmit}>
             <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
       <button className='btn btn-sm btn-primary my-4' type="submit" disabled={!stripe || !clientSecret}>
       Pay
      </button>
      <p className='text-red-600'>{error}</p>
      {transactionId &&  <p className='text-green-600 '>Your transaction id: {transactionId} </p>}
        </form>
    );
};

export default CheckOutFrom;