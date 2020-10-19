import { useMemo } from "react";
import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

type MaterixState = ReturnType<typeof store.getState>;

let store: Store;

const initialState = {
  hoge: 0,
  fuga: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HOGE":
      return {
        ...state,
        hoge: state.hoge + 1,
      };
    case "FUGA":
      return {
        ...state,
        fuga: !state.fuga,
      };
    default:
      return state;
  }
};

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore: any = (preloadedState: MaterixState) => {
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
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: MaterixState): any {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
