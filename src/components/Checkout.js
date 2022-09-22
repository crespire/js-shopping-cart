import React, { useState } from 'react';

function Checkout(props) {
  const {cart, toggleCheckout, checkoutStep, checkoutForward, checkoutBack} = props;

  return (
    <div className="">
      <button onClick={toggleCheckout}>Back</button>
      Master Checkout Form
    </div>
  );
}

export default Checkout;