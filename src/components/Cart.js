import React from 'react';
import CartLine from './CartLine';

function Cart(props) {
  const {cart, updateItem, toggleCheckout} = props;

  return (
    <div className="">
      {cart.map(entry => {
        return (
          <CartLine key={entry.item.id} item={entry.item} quantity={entry.quantity} updateItem={updateItem} />
        )
      })}
      <button onClick={toggleCheckout} disabled={cart.length === 0 ? true : false }>Checkout!</button>
    </div>
  );
}

export default Cart;