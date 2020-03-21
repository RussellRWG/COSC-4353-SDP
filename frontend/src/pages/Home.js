import React from 'react';

import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends React.Component {
	render() {
		return (
			<div className="outerfocus">
			<div className="focus">
				<h1>Home Page</h1>
				<h2>Use this page to test react router navigation</h2>
				<Link to="/login">
				<button type="button" class="btn btn-primary">Login</button>
				</Link>
				<Link to="/registration">
					<button type="button" class="btn btn-primary">Registration</button>
				</Link>
				<Link to="/profile">
					<button type="button" class="btn btn-primary">Client Profile</button>
				</Link>
				<Link to="/fuelform">
				<button type="button" class="btn btn-primary">Fuel Qoute Form</button>
				</Link>
				<Link to="/fuelhistory">
				<button type="button" class="btn btn-primary">Fuel Qoute History</button>
				</Link>
			</div>
			</div>
		);
	}
}
