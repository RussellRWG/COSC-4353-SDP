import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import ClientProfile from './pages/ClientProfile';

const Main = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home}></Route>
			<Route exact path='/profile' component={ClientProfile}></Route>
		</Switch>
		)
}

export default class App extends React.Component {
	render() { return (
		<div className="App">
			<Main/>
		</div>
		);
	}
}