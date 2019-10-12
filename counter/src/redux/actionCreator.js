import * as type from '../redux/type';

export const incrementCounter = () => ({
   type: type.INCREMENT
})

export const decrementCounter = () => ({
   type: type.DECREMENT
})

export const resetCounter = () => ({
   type: type.RESET
})