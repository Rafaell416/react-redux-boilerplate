import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FilterableTable from './Containers/FilterableTable'
import About from './Components/About'

export default (
	<Switch>
		<Route exact path="/" component={FilterableTable} />
		<Route path="/about" component={About} />
	</Switch>
)
