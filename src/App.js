import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(3))}>-</button>
      {isLogged && <h3>Member info</h3>}
    </div>
  );
}

export default App;
