import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from './redux/storeConfiguration';
import App from '../src/App'
import './index.css';

const store = configureStore();
render(
   <Provider store = {store}>
      <App />
   </Provider>, document.getElementById('root')
)