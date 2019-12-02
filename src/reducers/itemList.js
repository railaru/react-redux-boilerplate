//see https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns for more info

const itemList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default itemList;
