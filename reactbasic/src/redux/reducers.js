import * as types from './types';
//current global state of the application
// Initial (starting) state
export const initialState = {
    currentTime: new Date().toString()
}
//Since the reducer functions run everytime an action is dispatched
//we want to make sure these functions are as simple and fast as possible
// Our root reducer starts with the initial state
// and must return a representation of the next state
//The second argument here is the action that gets dispatched from the store.
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_NEW_TIME:
            return { ...state, currentTime: action.payload }
        default:
            return state;
    }
}
export default rootReducer;