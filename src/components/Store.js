import React, { useState, useEffect } from 'react';
import inventory from "../Inventory.json";
import Sidebar from './Sidebar';
import Display from './Display';

function Store() {
  const [cart, setCart] = useState([]);
  const [checkoutFlow, setCheckoutflow] = useState(false);

  const addItem = (id, quantity) => {
    console.log(`Adding ${quantity} of itemID ${id}`);
  };

  const removeItem = (id) => {
    console.log(`Removing itemID ${id}`);
    // Probably splice based on ID
  };

  const updateItem = (id, quantity) => {
    if (quantity === 0) {
      removeItem(id);
    } else {
      console.log(`Updating to ${quantity} of itemID ${id}`);
      // Probably a splice with replace is required here.
    }    
  }

  return (
    <div className="">
      <Sidebar />
      <Display />
    </div>
  );
}

export default Store;