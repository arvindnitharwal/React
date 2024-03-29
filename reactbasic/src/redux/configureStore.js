import {createStore} from 'redux';

import { rootReducer} from './reducers'
import { initialState} from './reducers'
export const configureStore = () => {
  const store = createStore(
    rootReducer, // root reducer
    initialState, // our initialState
  );

  return store;
}

export default configureStore;