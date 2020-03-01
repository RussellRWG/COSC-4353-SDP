import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Registration extends React.Component {
	render() {
		return (
			<div className="reigstration">
				<div>
					<Navbar bg="dark" variant="dark" expand="lg">
						<Navbar.Brand>Website Name</Navbar.Brand>
						<Nav className="mr-auto">
						</Nav>
						<Nav.Link>
							Sign In
						</Nav.Link>
					</Navbar>

				</div>
				<div className='focus'>
					<h1>Registration</h1>
					<Form>
						<Form.Group controlId="clientProfile">
							<Form.Label>Username</Form.Label>
							<Form.Control type="username"/>

							<Form.Label>Password</Form.Label>
							<Form.Control type="password"/>

							<Form.Label>Repeat Password</Form.Label>
							<Form.Control type="password2"/>
						</Form.Group>
					</Form>
					<button type="button" class="btn btn-primary">Submit</button>
				</div>
			</div>

		);
	}
}