import React from 'react';

import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import {connect} from 'react-redux';
import * as actions from '../store/actions/Auth';

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
			passwordFormError: '',
			confirm: false
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

		if (this.state.usernameFormError === '' && this.state.passwordFormError === '') {
			this.props.onAuth(this.state.username, this.state.password1, this.state.password2, this.state.confirm);
		}
	}

	validate() {

	}

	render() {
		const usernameAlert = this.state.usernameFormError;
		const passwordAlert = this.state.passwordFormError;

		if (this.props.token){
			this.props.logout();
			this.props.history.push('/login');
		}

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
				<div className='outerfocus'>
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
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.token,
		loading: state.loading,
		error: state.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (username, password1, password2) => dispatch(actions.authRegistration(username, password1, password2)),
		logout: () => dispatch(actions.logout()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
