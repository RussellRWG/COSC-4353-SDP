import React from 'react';
import ReactDOM from 'react-dom';

//import {Provider, connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

//import store from './store.js';

import Home from './pages/Home';
import Registration from './pages/Registration';
import ClientProfile from './pages/ClientProfile';
import Login from './pages/Login';
import FuelForm from './pages/FuelForm';
import FuelHistory from './pages/FuelHistory';
const Main = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home}></Route>
			<Route exact path='/registration' component={Registration}></Route>
			<Route exact path='/profile' component={ClientProfile}></Route>
			<Route exact path='/login' component={Login}></Route>
			<Route exact path='/fuelform' component={FuelForm}></Route>
			<Route exact path='/fuelhistory' component={FuelHistory}></Route>
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
