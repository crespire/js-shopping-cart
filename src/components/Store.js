import React, { useState, createContext } from 'react';
import uniqid from 'uniqid';
import { inventory } from "../assets/Inventory";
import Sidebar from './Sidebar';
import Display from './Display';

export const CheckoutContext = createContext(false);
export const CurrencyContext = createContext(false);
export const CartContext = createContext(0);

function Store() {
  const [cart, setCart] = useState([]);
  const [checkoutFlow, setCheckoutFlow] = useState(false);
  const [items, setItems] = useState(Object.values(inventory).map(obj => ({...obj, id: uniqid()})));
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [checkoutInformation, setCheckoutInformation] = useState({
    name: '',
    email: '',
    addressStreet: '',
    addressCity: '',
    addressArea: '',
    addressCountry: '',
    addressPost: '',
    cardNumber: '',
    cardExp: '',
    cardSec: '',
  });
  const formatter = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD'});
  const cartTotal = cart.reduce((total, entry) => { return total += entry.item.cost * entry.quantity }, 0);

  const addItem = (item, quantity) => {
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
    setCart(oldCart => {
      return oldCart.filter(entry => entry.item.id !== id);
    });
  };

  const updateItem = (item, quantity) => {
    if (quantity === 0) {
      removeItem(item.id);
    } else {
      setCart(oldCart => {
        let newCart = oldCart.filter(entry => entry.item.id !== item.id);
        let result = [...newCart, {item, quantity}].sort((a, b) => a.item.id > b.item.id);
        return result;
      })
    }
  }

  const toggleCheckout = () => {
    setCheckoutFlow(currentValue => !currentValue);
  }

  const checkoutNext = () => {
    if (checkoutStep === 3) {
      console.log('Order received! Beep boop.');
      console.error('DISCLAIMER: Your order and information will not be processed. Please visit a real pet store to buy stuff for your fur baby.');
      console.table(checkoutInformation);
      alert('Your order was submitted! (to the browser console...)');
    } else {
      setCheckoutStep(prev => prev + 1);
    }    
  }

  const checkoutBack = () => {
    if (checkoutStep === 1) {
      toggleCheckout();
    } else {
      setCheckoutStep(prev => prev - 1);
    }
  }

  return (
    <div className="flex flex-1 grow p-2 gap-2 min-h-0">
      <CheckoutContext.Provider value={checkoutFlow}>
        <CurrencyContext.Provider value={formatter}>
          <CartContext.Provider value={cartTotal}>
            <Sidebar checkoutFlow={checkoutFlow} checkoutInformation={checkoutInformation} setCheckoutInformation={setCheckoutInformation} cart={cart} updateItem={updateItem} toggleCheckout={toggleCheckout} checkoutStep={checkoutStep} checkoutNext={checkoutNext} checkoutBack={checkoutBack} />
            <Display items={items} addItem={addItem} />
          </CartContext.Provider>
        </CurrencyContext.Provider>
      </CheckoutContext.Provider>
    </div>
  );
}

export default Store;