import { combineReducers } from 'redux';

import counterReducer from './counter';
import loggedReducer from './isLogged';
import itemList from './itemList';

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  itemList
});

export default rootReducer;
