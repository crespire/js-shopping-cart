import React, { useContext } from 'react';
import CartLine from './CartLine';
import { CurrencyContext } from './Store';

function Cart(props) {
  const {cart, updateItem, toggleCheckout} = props;
  const currencyFormatter = useContext(CurrencyContext);
  const cartTotal = cart.reduce((total, entry) => { return total += entry.item.cost * entry.quantity }, 0);

  return (
    <div className="h-full flex flex-col align-center justify-between">
      <table className="text-left">
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>$</th>
            <th className="text-right">Total</th>
          </tr>
          {cart.map((entry, i) => {
            return (
              <CartLine key={entry.item.id} item={entry.item} i={i} quantity={entry.quantity} updateItem={updateItem} />
            )
          })}
      </table>
      <div className="flex flex-col">
        <span className="pb-2 text-right">Total: {currencyFormatter.format(cartTotal)}</span>
        <button className="disabled:border-slate-300 disabled:text-slate-300 p-2 background-slate-300 border-2 border-solid border-black" onClick={toggleCheckout} disabled={cart.length === 0 ? true : false }>Checkout!</button>
      </div>
    </div>
  );
}

export default Cart;