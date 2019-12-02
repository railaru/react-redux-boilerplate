import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';

export default function Counter() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(3))}>-</button>
    </>
  );
}
