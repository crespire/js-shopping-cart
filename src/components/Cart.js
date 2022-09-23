import React, { useContext } from 'react';
import CartLine from './CartLine';
import { CurrencyContext, CartContext } from './Store';

function Cart(props) {
  const {cart, updateItem, toggleCheckout} = props;
  const currencyFormatter = useContext(CurrencyContext);
  const cartTotal = useContext(CartContext);

  return (
    <div className="h-full flex flex-col align-center justify-between">
      <table className="text-left">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>$</th>
            <th className="text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((entry, i) => {
            return (
              <CartLine key={entry.item.id} item={entry.item} i={i} quantity={entry.quantity} updateItem={updateItem} />
            )
          })}
        </tbody>
      </table>
      <div className="flex flex-col">
        <span className="pb-2 text-right">Cart Total: {currencyFormatter.format(cartTotal)}</span>
        <button className="disabled:border-slate-300 disabled:text-slate-300 p-2 background-slate-300 border-2 border-solid border-black" onClick={toggleCheckout} disabled={cart.length === 0 ? true : false }>Place Order</button>
      </div>
    </div>
  );
}

export default Cart;