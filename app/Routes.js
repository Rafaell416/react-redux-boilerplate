import React, { Component }from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import ProjectList from './Containers/ProjectList'
import About from './Components/About'

export default class App extends Component {
  render() {
		return (
				<Router>
					<div>
						<Switch>
							<Route exact path="/" component={ProjectList} />
							<Route path="/about" component={About} />
						</Switch>
					</div>
				</Router>
		)
	}
}
