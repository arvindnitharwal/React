import { connect } from 'react-redux'
import Counter from '../views/counterView'
import { increment, decrement, reset } from '../redux/type';

const mapStateToProps = (state) => {
   return {
      counter: state
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(reset())
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);