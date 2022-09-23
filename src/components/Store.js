import React, { useState, createContext } from 'react';
import uniqid from 'uniqid';
import { inventory } from "../assets/Inventory";
import Sidebar from './Sidebar';
import Display from './Display';

export const CheckoutContext = createContext(false);
export const CurrencyContext = createContext(false);

function Store() {
  const [cart, setCart] = useState([]);
  const [checkoutFlow, setCheckoutFlow] = useState(false);
  const [items, setItems] = useState(Object.values(inventory).map(obj => ({...obj, id: uniqid()})));
  const [checkoutStep, setCheckoutStep] = useState(1);
  const formatter = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD'});

  const addItem = (item, quantity) => {
    console.log(`Adding ${quantity} of itemID ${item.id}`);
    const itemIDs = cart.map(entry => entry.item.id);
    if (itemIDs.includes(item.id)) {
      let entry = cart.find(obj => obj.item.id === item.id);
      updateItem(item, (quantity + entry.quantity));
    } else {
      setCart(oldCart => {
        let newCart = [...oldCart, {item, quantity}];
        let result = newCart.sort((a, b) => a.item.id > b.item.id);
        return result;
      });
    }
  };

  const removeItem = (id) => {
    console.log(`Removing itemID ${id}`);
    setCart(oldCart => {
      return oldCart.filter(entry => entry.item.id !== id);
    });
  };

  const updateItem = (item, quantity) => {
    if (quantity === 0) {
      removeItem(item.id);
    } else {
      console.log(`Updating to ${quantity} of itemID ${item.id}`);
      setCart(oldCart => {
        let newCart = oldCart.filter(entry => entry.item.id !== item.id);
        let result = [...newCart, {item, quantity}].sort((a, b) => a.item.id > b.item.id);
        return result;
      })
    }
  }

  const toggleCheckout = () => {
    console.log('Toggle checkout');
    setCheckoutFlow(currentValue => !currentValue);
  }

  const checkoutNext = () => {
    setCheckoutStep(prev => prev + 1);
  }

  const checkoutBack = () => {
    if (checkoutStep === 1 ) {
      toggleCheckout();
    } else {
      setCheckoutStep(prev => prev - 1);
    }
  }

  return (
    <div className="flex flex-1 grow p-2 gap-2 min-h-0">
      <CheckoutContext.Provider value={checkoutFlow}>
        <CurrencyContext.Provider value={formatter}>
          <Sidebar checkoutFlow={checkoutFlow} cart={cart} updateItem={updateItem} toggleCheckout={toggleCheckout} checkoutStep={checkoutStep} checkoutNext={checkoutNext} checkoutBack={checkoutBack} />
          <Display items={items} addItem={addItem} />
        </CurrencyContext.Provider>
      </CheckoutContext.Provider>
    </div>
  );
}

export default Store;