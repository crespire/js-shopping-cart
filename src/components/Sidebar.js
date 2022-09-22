import React from 'react';
import Checkout from './Checkout';
import Cart from './Cart';

function Sidebar(props) {
  const {checkoutFlow, cart, updateItem, toggleCheckout, checkoutStep, checkoutNext, checkoutBack} = props;
  return (
    <div className="">
      {checkoutFlow
        ? <Checkout cart={cart} toggleCheckout={toggleCheckout} checkoutStep={checkoutStep} checkoutNext={checkoutNext} checkoutBack={checkoutBack} />
        : <Cart cart={cart} updateItem={updateItem} toggleCheckout={toggleCheckout} />
      }
    </div>
  );
}

export default Sidebar;