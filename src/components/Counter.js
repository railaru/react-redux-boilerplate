import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';

export default function Counter() {
  const counter = useSelector(state => state.counter);
  const [incrementSize, setIncrementSize] = useState(5);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex mt-4">
        <div className="w-full">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="counter"
          >
            Counter:
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="increment"
            value={counter}
            readOnly
          />
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"
            htmlFor="increment"
          >
            Increment:
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="increment"
            type="number"
            value={incrementSize}
            onChange={e => setIncrementSize(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={() => dispatch(increment(incrementSize))}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement(incrementSize))}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          -
        </button>
      </div>
    </>
  );
}
