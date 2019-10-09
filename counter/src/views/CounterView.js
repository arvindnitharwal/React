import React, { Component } from 'react';
class CounterView extends Component {
    render() {
        const { counter, increment, decrement, reset } = this.props;
        return (
            <div className="App">
                <div>{counter}</div>
                <div>
                    <button onClick={increment}>Increment by 1</button>
                </div>
                <div>
                    <button onClick={decrement}>Decrement by 1</button>
                </div>
                <div>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        );
    }
}
export default CounterView;
