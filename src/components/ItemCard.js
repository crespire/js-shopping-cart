import React, { useState, useContext } from 'react';
import { CheckoutContext } from "./Store";

function ItemCard(props) {
  const [quantity, setQuantity] = useState(1);
  const item = props.item;
  const inCheckout = useContext(CheckoutContext);

  const updateQuantity = (e) => {
    setQuantity(Math.round(Number(e.target.value)));
  }

  return (
    <div className="">
      {item.name}
      <img className="" alt={item.name} src={item.image} />
      {item.description}
      {item.cost}
      <input type="number" value={quantity} min="1" max="100" step="1" onChange={updateQuantity} />
      <button disabled={inCheckout} onClick={() => {props.addItem(item, quantity)}}>Add Item</button>
    </div>
  );
}

export default ItemCard;