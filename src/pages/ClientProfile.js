import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class ClientProfile extends React.Component {
	render() {
		return (
			<div className="clientprofile">
				<div id = "navigation">
					<Navbar bg="dark" variant="dark" expand="lg">
					<Navbar.Brand>Website Name</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link>Client Profile</Nav.Link>
						<Nav.Link>Fuel Qoute Form</Nav.Link>
						<Nav.Link>Fuel Qoute History</Nav.Link>
					</Nav>
					<Navbar.Text>
						Logout
					</Navbar.Text>
					</Navbar>

				</div>
				<div className = "focus">
					<div id = "title">
						<h1>John Doe's Profile</h1>
					</div>
					<div>
						<Form>
							<Form.Group controlId="clientProfile">
								<Form.Label>Name:</Form.Label>
								<Form.Control type="name" placeholder="John Doe"/>

								<Form.Label>Address1:</Form.Label>
								<Form.Control type="address1" placeholder="White House"/>
								
								<Form.Label>Address2:</Form.Label>
								<Form.Control type="address2" placeholder="Secret Bunker 123"/>
								
								<Form.Label>City:</Form.Label>
								<Form.Control type="city" placeholder="Washington D.C."/>

								<Form.Label>State:</Form.Label>
								<Form.Control as="select">
									<option value="AL">AL</option>
									<option value="KS">KS</option>
									<option value="TX">TX</option>
									<option value="WA">WA</option>
								</Form.Control>

								<Form.Label>Zipcode:</Form.Label>
								<Form.Control type="zipcode" placeholder="12345"/>
							</Form.Group>
						</Form>
					</div>
					<div>
						<button type="button" class="btn btn-primary">Update Profile</button>
					</div>
				</div>
			</div>
		);
	}
}