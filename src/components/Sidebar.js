import React from 'react';
import Checkout from './Checkout';
import Cart from './Cart';

function Sidebar(props) {
  const {checkoutFlow, cart, updateItem, toggleCheckout} = props;
  return (
    <div className="">
      {checkoutFlow
        ? <Checkout cart={cart} toggleCheckout={toggleCheckout} />
        : <Cart cart={cart} updateItem={updateItem} toggleCheckout={toggleCheckout} />
      }
    </div>
  );
}

export default Sidebar;