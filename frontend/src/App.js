import React from 'react';

import {connect} from 'react-redux';
import {/*Switch,*/ Route} from 'react-router-dom';

import Home from './pages/Home';
import Registration from './pages/Registration';
import ClientProfile from './pages/ClientProfile';
import Login from './pages/Login';
import FuelForm from './pages/FuelForm';
import FuelHistory from './pages/FuelHistory';

import * as actions from './store/actions/Auth';

const Hoc = props => props.children;

const Main = () => {
	return (
		<Hoc>
			<Route exact path='/' component={Home}></Route>
			<Route exact path='/registration' component={Registration}></Route>
			<Route exact path='/profile' component={ClientProfile}></Route>
			<Route exact path='/login' component={Login}></Route>
			<Route exact path='/fuelform' component={FuelForm}></Route>
			<Route exact path='/fuelhistory' component={FuelHistory}></Route>
		</Hoc>
		)
}

class App extends React.Component {

	componentDidMount() {
		this.props.onTryAutoSignup();
	}

	render() { return (
			<div className="App" >
				<Main{...this.props}/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.token !== null
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignup: () => dispatch(actions.authCheckState()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
