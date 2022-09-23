import React, { useState } from 'react';

function Checkout(props) {
  const {cart, toggleCheckout, checkoutStep, checkoutNext, checkoutBack} = props;

  return (
    <div className="flex flex-col">
      <button className="p-2 background-slate-300 border-2 border-solid border-black" onClick={toggleCheckout}>Back</button>
      Master Checkout Form
    </div>
  );
}

export default Checkout;
