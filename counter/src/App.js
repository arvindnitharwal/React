import React, { Component } from 'react';
import './App.css';
import CounterView from '../src/views/CounterView';

class App extends Component {
   render() {
      return (
         <div className = "App">
            <header className = "App-header">
               <CounterView/>
            </header>
         </div>
      );
   }
}
export default App;