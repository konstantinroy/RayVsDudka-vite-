/* eslint-disable no-shadow */
import { useMemo } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension'
import { user } from './reducers/user';

let store;

const initialState = {};

// const persistConfig = {
//   key: 'root',
//   // version: 0,
//   storage,
//   blacklist: [
//     'modals',
//     'items',
//     'buyItems',
//     'notifications',
//     'user',
//     // 'groups',
//     'filters',
//     'deals',
//   ],
// };

// const userPersistConfig = {
//   key: 'user',
//   // version: 0,
//   storage,
//   blacklist: ['dealId', 'dealInfo'],
// };

const rootReducer = combineReducers({
  user,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

function initStore(preloadedState = initialState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(),
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);

  return store;
}