import React from 'react';

function CartLine(props) {
  const {item, i, quantity, updateItem} = props;
  let style = "";
  const changeQuantity = (e) => {
    updateItem(item, Number(e.target.value));
  }

  if (i % 2) { style += " bg-slate-100" };

  return (
    <tr className={style}>
      <td>
        <input className="w-12 text-right bg-inherit" type="number" value={quantity} onChange={changeQuantity} min="0" max="100" step="1" />
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