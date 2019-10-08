import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// We'll load our views from the `src/views`
// directory
import Home from '../src/components/Home';

const App = props => {
  return (
    <Router>
        <Route>
          path="*",
          component={Home}
        </Route>
        </Router>
  )
}

export default App;