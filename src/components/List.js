import React from 'react';

import { useSelector } from 'react-redux';

export default function List() {
  const items = useSelector(state => state.itemList);

  return (
    <>
      {items && (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
