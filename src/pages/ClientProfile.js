import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Alert from 'react-bootstrap/Alert';

class ClientProfile extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			address1: '',
			address2: '',
			city: '',
			state: '',
			zipcode: '',

			formValid: false,
			formError: ''
		}
	}

	onChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState(
			{[name]: value},
		);
	}

	onUpdateProfile = (event) => {
		this.setState({
			formValid: false,
			formError: ''
		});

		if (this.state.name.length > 50){
			this.setState({
				formError: 'Name must be 50 characters or less'
			});
		}
		else if (this.state.name.length < 1){
			this.setState({
				formError: 'Name is required'
			});
		}
		else if (this.state.address1.length > 100){
			this.setState({
				formError: 'Address 1 must be 100 characters or less'
			});
		}
		else  if (this.state.address1.length < 1){
			this.setState({
				formError: 'Address 1 is required'
			});

		}
		else if (this.state.address2.length > 100){
			this.setState({
				formError: 'Address 2 must be 100 characters or less'
			});
		}
		else if (this.state.city.length > 100){
			this.setState({
				formError: 'City must be 100 characters or less'
			});
		}
		else if (this.state.city.length < 1){
			this.setState({
				formError: 'City is required'
			});
		}
		else if (this.state.state === ''){
			this.setState({
				formError: 'You must select a state'
			});
		}
		else if (this.state.zipcode.length != 5 && this.state.zipcode.length != 9){
			this.setState({
				formError: 'Zipcode must be 5 or 9 characters long'
			});
		}
		else {
			this.setState({
				formValid: true
			});
		}
	}

	render() {
		const formAlert = this.state.formError;

		return (
			<div className="clientprofile">
				<div id = "navigation">
					<Navbar bg="dark" variant="dark" expand="lg">
					<Navbar.Brand>Website Name</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link><button type="button" class="btn btn-primary">Client Profile</button></Nav.Link>
						<Nav.Link><Link to="/fuelform">
            <button type="button" class="btn btn-primary">Fuel Quote Form</button>
							</Link></Nav.Link>
						<Nav.Link><Link to="/fuelhistory">
            <button type="button" class="btn btn-primary">Fuel Quote History</button>
							</Link></Nav.Link>
					</Nav>
					<Nav.Link>
						Logout
					</Nav.Link>
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
								<Form.Control name="name" value={this.state.name} type="text" onChange={this.onChange}/>

								<Form.Label>Address1:</Form.Label>
								<Form.Control name="address1" value={this.state.address1} type="text" onChange={this.onChange}/>

								<Form.Label>Address2:</Form.Label>
								<Form.Control name="address2" value={this.state.address2} type="text" onChange={this.onChange}/>

								<Form.Label>City:</Form.Label>
								<Form.Control name="city" type="text" value={this.state.city} onChange={this.onChange}/>

								<Form.Label>State:</Form.Label>
								<Form.Control name="state" value={this.state.state} onChange={this.onChange} as="select">
									<option value=""></option>
									<option value="AL">AL</option>
									<option value="AK">AK</option>
									<option value="AR">AR</option>
									<option value="AZ">AZ</option>
									<option value="CA">CA</option>
									<option value="CO">CO</option>
									<option value="CT">CT</option>
									<option value="DE">DE</option>
									<option value="FL">FL</option>
									<option value="GA">GA</option>
									<option value="HI">HI</option>
									<option value="AL">AL</option>
									<option value="ID">ID</option>
									<option value="IA">IA</option>
									<option value="IL">IL</option>
									<option value="IN">IN</option>
									<option value="KS">KS</option>
									<option value="KY">KY</option>
									<option value="LA">LA</option>
									<option value="MA">MA</option>
									<option value="MD">MD</option>
									<option value="MI">MI</option>
									<option value="MN">MN</option>
									<option value="MO">MO</option>
									<option value="MS">MS</option>
									<option value="MT">MT</option>
									<option value="NC">NC</option>
									<option value="ND">ND</option>
									<option value="NE">NE</option>
									<option value="NH">NH</option>
									<option value="NJ">NJ</option>
									<option value="NM">NM</option>
									<option value="NV">NV</option>
									<option value="OH">OH</option>
									<option value="OK">OK</option>
									<option value="OR">OR</option>
									<option value="PA">PA</option>
									<option value="RI">RI</option>
									<option value="SC">SC</option>
									<option value="SD">SD</option>
									<option value="TN">TN</option>
									<option value="TX">TX</option>
									<option value="UT">UT</option>
									<option value="VA">VA</option>
									<option value="VT">VT</option>
									<option value="WA">WA</option>
									<option value="WI">WI</option>
									<option value="WV">WV</option>
									<option value="WY">WY</option>
								</Form.Control>

								<Form.Label>Zipcode:</Form.Label>
								<Form.Control name="zipcode" type="text" value={this.state.zipcode} onChange={this.onChange}/>
							</Form.Group>
						</Form>
					</div>
					<div>
						<button type="button" class="btn btn-primary" onClick={this.onUpdateProfile}>Update Profile</button>
						{formAlert !== '' &&
							<Alert variant='danger'>{formAlert}</Alert>
						}
					</div>
				</div>
			</div>
		);
	}
}

export default ClientProfile;
