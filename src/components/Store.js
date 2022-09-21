import React, { useState, useEffect } from 'react';
import { inventory } from "../assets/Inventory";
import Sidebar from './Sidebar';
import Display from './Display';

function Store() {
  const [cart, setCart] = useState([]);
  const [checkoutFlow, setCheckoutflow] = useState(false);

  const addItem = (id, quantity) => {
    console.log(`Adding ${quantity} of itemID ${id}`);
    // This operation will be used by each child item in the display.
  };

  const removeItem = (id) => {
    console.log(`Removing itemID ${id}`);
    // Probably splice based on ID, this is a cart operation
  };

  const updateItem = (id, quantity) => {
    if (quantity === 0) {
      removeItem(id);
    } else {
      console.log(`Updating to ${quantity} of itemID ${id}`);
      // Probably a splice with replace is required here, this is a cart operation.
    }    
  }

  return (
    <div className="">
      <Sidebar cart={cart} updateItem={updateItem} />
      <Display items={inventory} addItem={addItem} />
    </div>
  );
}

export default Store;