import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addItem } from './../actions';

import uuid from 'uuid';

export default function Form() {
  const dispatch = useDispatch();
  const [item, setItem] = useState('');

  const submitForm = e => {
    e.preventDefault();
    const newItem = { id: uuid(), name: item };
    dispatch(addItem(newItem));
  };

  return (
    <>
      <form action="" onSubmit={e => submitForm(e)}>
        <input
          value={item}
          onChange={e => setItem(e.target.value)}
          type="text"
        />
        {item && <button>add</button>}
      </form>
    </>
  );
}
