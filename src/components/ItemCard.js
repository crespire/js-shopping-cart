import React, { useState, useContext } from 'react';
import { CheckoutContext, CurrencyContext } from "./Store";

function ItemCard(props) {
  const [quantity, setQuantity] = useState(1);
  const item = props.item;
  const inCheckout = useContext(CheckoutContext);
  const currencyFormatter = useContext(CurrencyContext);

  const updateQuantity = (e) => {
    setQuantity(Math.round(Number(e.target.value)));
  }

  return (
    <div className="w-80 h-80 border border-black border-solid gap-4 p-2 flex flex-col align-center justify-between">
      <h3 className="text-xl">
        {item.name}
      </h3>
      {currencyFormatter.format(item.cost)}
      <img className="w-auto h-auto object-center object-scale-down overflow-hidden" alt={item.name} src={item.image} />
      {item.description}
      
      <div className="w-auto flex place-content-end">
        <input className="w-12 text-right" type="number" value={quantity} min="1" max="100" step="1" onChange={updateQuantity} />&nbsp;
        <button className="disabled:border-slate-300 disabled:text-slate-300 p-1 background-slate-300 border-2 border-solid border-black" disabled={inCheckout} onClick={() => {props.addItem(item, quantity)}}>Add Item</button>
      </div>
    </div>
  );
}

export default ItemCard;