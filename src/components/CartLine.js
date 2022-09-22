import React from 'react';

function CartLine(props) {
  const {item, quantity, updateItem} = props;

  const changeQuantity = (e) => {
    updateItem(item, Number(e.target.value));
  }

  return (
    <div className="">
      {item.name} x <input type="number" value={quantity} onChange={changeQuantity} min="0" max="100" step="1" /> (${item.cost * quantity})
    </div>
  );
}

export default CartLine;