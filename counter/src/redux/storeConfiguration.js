import {createStore} from 'redux';
import rootReducer, {initialState} from "./reducer";

export const configureStore = () => {
    let store = createStore(
        rootReducer,
        initialState
    );
    return store;
}