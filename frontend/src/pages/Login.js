import React from 'react';
import {Link} from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

import {connect} from 'react-redux';
import * as actions from '../store/actions/Auth';

class Login extends React.Component {
    constructor(props){
	super(props);
        this.state = {
			username: '',
			password: '',
			formError: '',
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
		event.preventDefault();

		this.setState({
			formError: '',
		});

		if (this.state.username === ''){
			this.setState({
				formError: 'Username is invalid',
			});
		}
		else if (this.state.password === ''){
			this.setState({
				formError: 'Password is invalid',
			});
		}
		else if (this.state.formError === '') {
			this.props.onAuth(this.state.username, this.state.password);
		}
	}

	validateFields() {

	}

    render(){
    	let formAlert = this.state.formError;
    	if (this.props.error){
    		formAlert = this.props.error.message;
    	}

		if (this.props.token){
			this.props.history.push('/profile');
		}

        return(

            <div className="login">
                <div>
	                <Navbar bg="dark" variant="dark" expand="lg">
						<Navbar.Brand>Website Name</Navbar.Brand>
						<Nav className="mr-auto"></Nav>
						<Nav.Link>
							<Link to="/">
        						<button type="button" className="btn btn-primary">Home</button>
							</Link>
						</Nav.Link>
					</Navbar>
                </div>

                <div className='outerfocus'>
	                <div className='focus'>
						<h1>Sign In</h1>
						{this.props.loading ?
							<Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
							:
							<div>
								<Form>
									<Form.Group controlId="login">
										<Form.Label>Username</Form.Label>
										<Form.Control name="username" value={this.state.username} onChange={this.onChange} type="text"/>
										<Form.Label>Password</Form.Label>
										<Form.Control name="password" value={this.state.password} onChange={this.onChange} type="password"/>
									</Form.Group>
								</Form>
								<div>
								    <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
								    <p>or <Link to="/Registration">Register</Link></p>
							      	
							    </div>
						      	{formAlert !== '' &&
									<Alert variant='danger'>{formAlert}</Alert>
								}
							</div>
	            		}
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
		onAuth: (username, password) => dispatch(actions.authLogin(username, password))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
