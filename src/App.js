import React from 'react'
import { HomePage } from './components/pages/HomePage'
import { NotFound } from './components/pages/NotFound'
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
			<Switch>
        <Route exact path="/" component={ HomePage } />
				<Route component={ NotFound } />
      </Switch>
    </Router>
  )
}

export default App;
