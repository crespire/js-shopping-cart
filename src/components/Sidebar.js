import React from 'react';
import Checkout from './Checkout';
import Cart from './Cart';

function Sidebar(props) {
  const {checkoutFlow, checkoutInformation, setCheckoutInformation, cart, updateItem, toggleCheckout, checkoutStep, checkoutNext, checkoutBack} = props;

  return (
    <div className="flex-none min-w-fit w-1/4 p-2 background-slate-100 border-solid border-black border-r overflow-y-scroll overflow-x-hidden">
      {checkoutFlow
        ? <Checkout cart={cart} toggleCheckout={toggleCheckout} setCheckoutInformation={setCheckoutInformation} checkoutStep={checkoutStep} checkoutNext={checkoutNext} checkoutBack={checkoutBack} />
        : <Cart cart={cart} updateItem={updateItem} toggleCheckout={toggleCheckout} />
      }
    </div>
  );
}

export default Sidebar;
