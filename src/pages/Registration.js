import React from 'react';
import {connect} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class Registration extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password1: '',
			password2: '',
			usernameValid: false,
			passwordValid: false,
			usernameFormError: '',
			passwordFormError: ''
		}
	}

	onChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState(
			{[name]: value},
		);
	}

	onSubmit = (event) => {
		this.setState({
			usernameValid: false,
			passwordValid: false,
			usernameFormError: '',
			passwordFormError: ''
		});

		if (this.state.username.length < 3){
			this.setState({
				usernameFormError: 'Username must be at least 3 characters long'
			});
		}
		else {
			this.setState({
				usernameValid: true
			});
		}

		if (this.state.password1.length < 8){
			this.setState({
				passwordFormError: 'Password must be at least 8 characters long'
			});
		}
		else if (this.state.password1 !== this.state.password2){
			this.setState({
				passwordFormError: 'Passwords do not match'
			});
		}
		else {
			this.setState({
				passwordValid: true
			});
		}
	}

	render() {
		const usernameAlert = this.state.usernameFormError;
		const passwordAlert = this.state.passwordFormError;

		return (
			<div className="reigstration">
				<div>
					<Navbar bg="dark" variant="dark" expand="lg">
						<Navbar.Brand>Website Name</Navbar.Brand>
						<Nav className="mr-auto">
						</Nav>
						<Nav.Link><Link to="/login">
            <button type="button" class="btn btn-primary">Sign In</button>
							</Link>
						</Nav.Link>
					</Navbar>

				</div>
				<div className='focus'>
					<h1>Registration</h1>
					<Form>
						<Form.Group controlId="registration">
							<Form.Label>Username</Form.Label>
							<Form.Control name="username" value={this.state.username} onChange={this.onChange} type="text"/>

							<Form.Label>Password</Form.Label>
							<Form.Control name="password1" value={this.state.password1} onChange={this.onChange} type="password"/>

							<Form.Label>Repeat Password</Form.Label>
							<Form.Control name="password2" value={this.state.password2} onChange={this.onChange} type="password"/>
						</Form.Group>
					</Form>
					<button type="button" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
					<div>
						{usernameAlert !== '' &&
							<Alert variant='danger'>{usernameAlert}</Alert>
						}
						{passwordAlert !== '' &&
							<Alert variant='danger'>{passwordAlert}</Alert>
						}
					</div>
				</div>
			</div>
		);
	}
}

export default Registration;
