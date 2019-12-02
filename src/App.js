import React from 'react';

import { useSelector } from 'react-redux';

import './App.css';

import Counter from '././components/Counter';

import Form from './components/Form';
import List from './components/List';

function App() {
  const isLogged = useSelector(state => state.isLogged);

  return (
    <div className="App">
      {isLogged && <h3>Member info</h3>}

      <Counter />
      <Form />
      <List />
    </div>
  );
}

export default App;
