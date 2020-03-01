import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Registration from './pages/Registration';
import ClientProfile from './pages/ClientProfile';

const Main = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home}></Route>
			<Route exact path='/registration' component={Registration}></Route>
			<Route exact path='/profile' component={ClientProfile}></Route>
		</Switch>
		)
}

export default class App extends React.Component {
	render() { return (
		<div className="App">
			<Main/>
			<div className='footer'>
				<p>This website was made by Nekruz, Russel, and Andrew</p>
			</div>
		</div>
		);
	}
}