import React from 'react';

import { useSelector } from 'react-redux';

import './App.css';

import Counter from '././components/Counter';

import Form from './components/Form';
import List from './components/List';
import Navbar from './components/Navbar';

function App() {
  const isLogged = useSelector(state => state.isLogged);

  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto px-4">
        {isLogged ? (
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:px-4">
              <List />
              <Form />
            </div>
            <div className="w-full lg:w-1/2 lg:px-4">
              <Counter />
            </div>
          </div>
        ) : (
          <h2 className="text-2xl mt-10">Sign in to see the content</h2>
        )}
      </div>
    </div>
  );
}

export default App;
