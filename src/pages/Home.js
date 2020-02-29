import React from 'react';

import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default class Home extends React.Component {
	render() {
		return (
			<div className="focus">
				<h1>Home Page</h1>
				<h2>Use this page to test react router navigation</h2>
				<button type="button" class="btn btn-primary">Login</button>
				<button type="button" class="btn btn-primary">Registration</button>
				<Link to="/profile">
					<button type="button" class="btn btn-primary">Client Profile</button>
				</Link>
				<button type="button" class="btn btn-primary">Fuel Qoute Form</button>
				<button type="button" class="btn btn-primary">Fuel Qoute History</button>
			</div>
		);
	}
}