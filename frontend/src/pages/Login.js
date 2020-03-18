import React from 'react';

import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
class Login extends React.Component {
    constructor(props){
	super(props);
        this.state = {
			username: '',
			password: '',
		}
	}
        onChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState(
			{[name]: value},
		);
	}
        render(){
            return(
                    <div className="login">
                    <div>
                    <Navbar bg="dark" variant="dark" expand="lg">
						<Navbar.Brand>Website Name</Navbar.Brand>
						<Nav className="mr-auto">
						</Nav>
						<Nav.Link><Link to="/">
            <button type="button" class="btn btn-primary">Home</button>
							</Link>
						</Nav.Link>
					</Navbar>
                    </div>
                    <div className='focus'>
					<h1>Sign In</h1>
					<Form>
						<Form.Group controlId="login">
							<Form.Label>Username</Form.Label>
							<Form.Control name="username" value={this.state.username} onChange={this.onChange} type="text"/>
              <Alert variant='danger'>Username is inavlid</Alert>
							<Form.Label>Password</Form.Label>
							<Form.Control name="password" value={this.state.password} onChange={this.onChange} type="password"/>
              <Alert variant='danger'>Password is incorrect</Alert>
						</Form.Group>
					</Form>
          <button type="button" class="btn btn-primary">Submit</button>
          <Link to="/Registration">
          <button type="button" class="btn btn-primary">Create an Account</button>
          </Link>

                </div>
                </div>

                );
        }
}
export default Login;
