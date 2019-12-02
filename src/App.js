import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addItem } from './actions';

import uuid from 'uuid';

import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const items = useSelector(state => state.itemList);
  const dispatch = useDispatch();

  const [item, setItem] = useState('');

  const submitForm = e => {
    e.preventDefault();
    const newItem = { id: uuid(), name: item };
    dispatch(addItem(newItem));
  };

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(3))}>-</button>
      {isLogged && <h3>Member info</h3>}
      <hr />

      <form action="" onSubmit={e => submitForm(e)}>
        <input
          value={item}
          onChange={e => setItem(e.target.value)}
          type="text"
        />
        {item && <button>add</button>}
      </form>
      {items && (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
