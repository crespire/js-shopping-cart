import React from 'react';
import ItemCard from './ItemCard';

function Display(props) {
  const items = props.items
  console.log(items);

  return (
    <div className="flex-1 w-auto h-fit flex flex-wrap gap-2 overflow-y-scroll">
      { items.map(item => {
        return <ItemCard key={item.id} item={item} addItem={props.addItem} />
      })}
    </div>
  );
}

export default Display;