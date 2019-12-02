import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

// //ACTION -> DESCRIBES WHAT YOU WANT TO DO (e.g. increment)
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   };
// };
// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   };
// };

// //REDUCER -> DESCRIBES HOW ACTIONS TRANSFORM CURRENT STATE TO THE NEW STATE
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;

//     case 'DECREMENT':
//       return state - 1;
//   }
// };

// //STORE -> GLOBALIZE STATE
// let store = createStore(counter);

// //display result:
// store.subscribe(() => console.log(store.getState()));

// //DISPATCH -> EXECUTE THE ACTION
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(increment());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
