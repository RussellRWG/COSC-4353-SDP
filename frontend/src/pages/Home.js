import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<div>
		                <Navbar bg="dark" variant="dark" expand="lg">
							<Navbar.Brand>Website Name</Navbar.Brand>
							<Nav className="mr-auto"></Nav>
						</Navbar>
	            </div>
				<div className="outerfocus">
				<div className="focus">
					<h1 class="d-flex justify-content-center"><strong>Welcome!</strong></h1>
					<h1 class="d-flex justify-content-center">Our Website Predicts Fuel Rates</h1>
					<br/>
					{/*<h2>Use this page to test react router navigation</h2>*/}
					<h3 class="d-flex justify-content-center"><Link to="/login"> Returning Client? Login Here</Link></h3>
					<h3 class="d-flex justify-content-center"><Link to="/registration">First Time Visitor? Register Here</Link></h3>
					{/*<Link to="/profile">
						<button type="button" class="btn btn-primary">Client Profile</button>
					</Link>
					<Link to="/fuelform">
					<button type="button" class="btn btn-primary">Fuel Qoute Form</button>
					</Link>
					<Link to="/fuelhistory">
					<button type="button" class="btn btn-primary">Fuel Qoute History</button>
					</Link>*/}
				</div>
				</div>
			</div>
		);
	}
}
