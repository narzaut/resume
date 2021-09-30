import React from 'react'
import { HomePage } from './components/pages/HomePage'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { NotFound } from './components/pages/NotFound';

function App() {
	
	return (
		<Router>
			<Switch>
				<Route exact path = '/' component={ HomePage }/>
				<Route component={ NotFound } />
			</Switch>
		</Router>
  )
}

export default App;
