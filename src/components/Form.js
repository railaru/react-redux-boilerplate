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
      <form className="w-full max-w-sm mt-10" onSubmit={e => submitForm(e)}>
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Item name"
            aria-label="Item Name"
            value={item}
            onChange={e => setItem(e.target.value)}
          />
          {item && (
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Add
            </button>
          )}
        </div>
      </form>
    </>
  );
}
