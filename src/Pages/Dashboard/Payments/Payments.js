import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from "./PaymentForm";


import Buffering from '../../Shared/Buffering/Buffering';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
   
    const orders = useLoaderData();
    const navigation = useNavigation();
    const { name, price } = orders;
    if(navigation.state === "loading"){
        return <Buffering></Buffering>
    }
    return (
        <div className='bg-sky-200 p-4  text-black flex gap-10 items-center justify-center'>
           <div>
           <div>
            <h1 className='lg:text-5xl text-3xl font-bold uppercase shadow-lg shadow-orange-300'>Happy Payment</h1>
            <h3 className="text-3xl my-8">Payment for<span className='mx-3 font-bold p-2 text-2xl'>{name}</span></h3>
            <p className="text-2xl">Please pay <strong className='text-2xl  p-2 mx-3'>${price}</strong></p>
            </div>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <PaymentForm
                        orders={orders}
                    />
                </Elements>
            </div>
           </div>
        </div>
    );
};

export default Payment;