import React, { useContext } from 'react';
import { CheckoutContext } from './Store';

function CartLine(props) {
  const {item, i, quantity, updateItem=null} = props;
  const inCheckout = useContext(CheckoutContext);

  const changeQuantity = (e) => {
    updateItem(item, Number(e.target.value));
  }

  let style = i % 2 ? "bg-slate-100" : '';

  return (
    <tr className={style}>
      <td>
        {inCheckout
          ? <span>{quantity}</span>
          : <input className="w-12 text-right bg-inherit" type="number" value={quantity} onChange={changeQuantity} min="0" max="100" step="1" />
        }        
      </td>
      <td>
        {item.name}
      </td>
      <td>
        ${item.cost}
      </td> 
      <td className="text-right">
        ${item.cost * quantity}
      </td>
    </tr>
  );
}

export default CartLine;