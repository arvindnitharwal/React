import * as type from "./type";

export const initialState = {
   counter: 0
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
       case type.INCREMENT: return {...state, counter: state.counter + 1}
       case type.DECREMENT: return {...state, counter: state.counter - 1}
       case type.RESET : return {...state, counter: 0}
       default: return state
    }
 }

 export default rootReducer;