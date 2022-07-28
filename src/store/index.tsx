import React, { createContext, useContext } from 'react';
import type { ReactElement } from 'react';
import { useInitStore } from '@fortissimo/hook';
import type { Store } from '@fortissimo/hook';

const state = {
  text: 'hello, world!'
};
type State = typeof state;

const commit = {
  setText(state, { text = state.text }) {
    return { text };
  }
};

const dispatch = {
  async setText(state, commit, { text = state.text }) {
    commit({
      type: 'setText',
      text
    });
  }
};

const storeData = {
  state,
  commit,
  dispatch
};

const StoreContext = createContext<Store<State>>(null);
function StoreProvider(props: { children: ReactElement }): ReactElement {
  const store = useInitStore(storeData);
  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
}
function useStore(): Store<State> {
  return useContext(StoreContext);
}

export { StoreProvider, useStore };
