import React, { useState } from 'react';

function Checkout(props) {
  const {cart, toggleCheckout, checkoutStep, checkoutNext, checkoutBack} = props;

  return (
    <div className="">
      <button onClick={toggleCheckout}>Keep Shopping</button>
      Master Checkout Form
    </div>
  );
}

export default Checkout;