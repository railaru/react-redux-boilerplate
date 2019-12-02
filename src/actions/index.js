export const signIn = isLoggedIn => {
  return { type: 'SIGN_IN', payload: isLoggedIn };
};

export const signOut = isLoggedIn => {
  return { type: 'SIGN_OUT', payload: isLoggedIn };
};

export const increment = incrementAmount => {
  return { type: 'INCREMENT', payload: incrementAmount };
};

export const decrement = incrementAmount => {
  return { type: 'DECREMENT', payload: incrementAmount };
};

export const addItem = item => {
  return { type: 'ADD_ITEM', payload: item };
};
