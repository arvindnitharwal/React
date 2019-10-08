import React from 'react';
import { connect } from 'react-redux';
import { fetchNewTime } from '../redux/actionCreator';
const Home = (props) => {
  return (
    <div className="home">
      <h1>Welcome home!</h1>
      <p>Current time: {props.currentTime}</p>
      <button onClick={props.updateTime}>
        Update time
      </button>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  updateTime: () => dispatch(fetchNewTime())
})

const mapStateToProps = state => {
  return {
    currentTime: state.currentTime
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);