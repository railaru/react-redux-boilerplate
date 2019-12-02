import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut } from './../actions';

export default function Navbar() {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.isLogged);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <h1 className="text-xl text-white">Redux Boilerplate</h1>
      {!isLogged ? (
        <button
          onClick={() => dispatch(signIn(true))}
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          Sign in
        </button>
      ) : (
        <button
          onClick={() => dispatch(signOut(true))}
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          Sign out
        </button>
      )}
    </nav>
  );
}
