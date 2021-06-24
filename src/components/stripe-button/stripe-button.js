import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J67rSSD4ZPC3QTF7F9K4e1wHQYHevgmMqcQ18lgT6FLInmbks2VX90ILXMrNiQYkge7NDYHZ9phycIK0Hrn4EPs00C5IyYlbG'
     

   const onToken =  token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label= ' Pay Now'
            name = 'Suki'
            billingAddress
            shippingAddress
            image="/images/TSUKI_360x.png" 
            description= { `Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />

    );
};

export default StripeCheckoutButton;