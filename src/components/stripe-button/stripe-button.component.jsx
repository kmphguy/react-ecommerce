import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I5GP8CD13ZEUMjLVRxlkc9iCGayuvUAGyq4LvR3BOfhuQi69apqTDzsCusfyaTrvyMuapWs1phmHIuUeympYEFC00LE3Ug203";

const onToken = token => {
    console.log(token);
    alert('Payment Successful')
}
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;