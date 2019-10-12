import React, { Component } from 'react';
import { connect } from "react-redux";
import { incrementCounter, decrementCounter, resetCounter } from '../redux/actionCreator';
class CounterView extends Component {
    render() {
        return (
            <div className="App">
                <div>{this.props.counter}</div>
                <div>
                    <button onClick={() => this.props.increment()}>Increment by 1</button>
                </div>
                <div>
                    <button onClick={() => this.props.decrement()}>Decrement by 1</button>
                </div>
                <div>
                    <button onClick={() => this.props.reset()}>Reset</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter()),
    reset: () => dispatch(resetCounter())
});

const mapStateToProps = state => {
    let {
        counter
    } = state;
    return {counter: counter}
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterView);
