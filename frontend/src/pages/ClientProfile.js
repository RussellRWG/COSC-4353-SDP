import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import axios from 'axios';

import {connect} from 'react-redux';
import * as actions from '../store/actions/Auth';

class ClientProfile extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			fullname: '',
			address1: '',
			address2: '',
			city: '',
			state: '',
			zipcode: '',

			formSubmit: 'False',

			formError: {
				fullname : '',
				address1 : '',
				address2 : '',
				city : '',
				state : '',
				zipcode : '',
				},
		}
	}

	clearFormErrors(){
		this.setState({
			formError: {
				fullname : '',
				address1 : '',
				address2 : '',
				city : '',
				state : '',
				zipcode : '',
				},
		});
	}

	componentDidMount = async () => {
		/*if (!this.props.token){
			this.props.history.push('/login');
		}*/

		//await mapStateToProps(this.state);
        await this.props.isLoggedIn();

		if (!this.props.token){
			this.props.history.push('/login');
		}

		axios.defaults.headers = {
			'Content-Type': 'application/json',
			Authorization: `Token ${this.props.token}`
		};

		//console.log('Token:', this.props.token);

		axios
			.get(`http://localhost:8000/api/clientprofile`)
			.then(res => {
				const list = res.data[0];
				//console.log(list)
				this.setState({
					//username : list.username,
					fullname: list.fullname,
					address1: list.address1,
					address2: list.address2,
					city: list.city,
					state: list.state,
					zipcode: list.zipcode
				});
			});
	}

	onChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState(
			{[name]: value},
		);
	}

	onUpdateProfile = (event) => {
		this.clearFormErrors()

		/*if (this.state.fullname.length > 50){
			this.setState({
				formError: {'fullname':'Name must be 50 characters or less'}
			});
		}
		else if (this.state.fullname.length < 1){
			this.setState({
				formError: {'fullname':'Name is required'}
			});
		}
		else if (this.state.address1.length > 100){
			this.setState({
				formError: {'address1':'Address 1 must be 100 characters or less'}
			});
		}
		else  if (this.state.address1.length < 1){
			this.setState({
				formError: {'address1':'Address 1 is required'}
			});

		}
		else if (this.state.address2.length > 100){
			this.setState({
				formError: {'address2':'Address 2 must be 100 characters or less'}
			});
		}
		else if (this.state.city.length > 100){
			this.setState({
				formError: {'city':'City must be 100 characters or less'}
			});
		}
		else if (this.state.city.length < 1){
			this.setState({
				formError: {'city':'City is required'}
			});
		}
		else if (this.state.state === ''){
			this.setState({
				formError: {'state':'You must select a state'}
			});
		}
		else if (this.state.zipcode.length < 1){
			this.setState({
				formError: {'zipcode':'Zipcode is required'}
			});
		}
		else if (this.state.zipcode.length !== 5 && this.state.zipcode.length !== 9){
			this.setState({
				formError: {'zipcode':'Zipcode must be 5 or 9 characters long'}
			});
		}
		else*/ //{
			axios.put(`http://localhost:8000/api/clientprofile/`, JSON.stringify({
				fullname: this.fullname,
				address1: this.address1,
				address2: this.address2,
				city: this.city,
				state: this.state,
				zipcode: this.zipcode
			}))
			.then (res => {
				console.log('Response:', res);
				this.setState({formSubmit: 'True'});
				const data = res.data;
				this.setState({
					formError: {
						fullname: data.fullname,
						address1: data.address1,
						address2: data.address2,
						city: data.city,
						state: data.state,
						zipcode: data.zipcode,
					},
				});
			})
			.catch(function (error) {
		    	console.log(error);
		  });
		//}
	}

	onLogout = (event) => {
		this.props.logout();
		this.props.history.push('/login');
	}

	render() {
		let submitAlert = this.state.formSubmit;
		let errors = [];

		for (var key in this.state.formError){
			if (this.state.formError[key] !== ''){
				errors.push(this.state.formError[key]);
			}
		}

		console.log('Errors: ' + errors);

		return (
			<div className="clientprofile">
				<div id = "navigation">
					<Navbar bg="dark" variant="dark" expand="lg">
					<Navbar.Brand>Website Name</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="/profile">Client Profile</Nav.Link>
						<Nav.Link href="/fuelform">Fuel Quote Form</Nav.Link>
						<Nav.Link href="/fuelhistory">Fuel Quote History</Nav.Link>
					</Nav>
					<Nav.Link onClick = {this.onLogout}>
						Logout
					</Nav.Link>
					</Navbar>

				</div>
				<div className = "outerfocus">
				<div className = "focus">
					<div id = "title">
						<h1>Client Profile</h1>
					</div>
					<div>
						<Form>
							<Form.Group controlId="clientProfile">
								<Form.Label>Name:</Form.Label>
								<Form.Control name="fullname" value={this.state.fullname} type="text" onChange={this.onChange}/>

								<Form.Label>Address 1:</Form.Label>
								<Form.Control name="address1" value={this.state.address1} type="text" onChange={this.onChange}/>

								<Form.Label>Address 2:</Form.Label>
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
									<option value="ID">ID</option>
									<option value="IA">IA</option>
									<option value="IL">IL</option>
									<option value="IN">IN</option>
									<option value="KS">KS</option>
									<option value="KY">KY</option>
									<option value="LA">LA</option>
									<option value="MA">MA</option>
									<option value="MD">MD</option>
									<option value="ME">MD</option>
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
									<option value="NY">NV</option>
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
						<button type="button" className="btn btn-primary" onClick={this.onUpdateProfile}>Update Profile</button>
						{errors === undefined || errors.length > 0 ?
								<Alert variant='danger'>
									<Alert.Heading>Error: Unable to Update Profile</Alert.Heading>
									{errors.map((d, idx) => <p>{d}</p>)}
								</Alert>
							:
							null
						}
						{errors.length === 0 && submitAlert !== 'False' &&
						<Alert variant='primary'>{''}
						<Alert.Heading>Profile has been updated</Alert.Heading>
						</Alert>
					}

					</div>
				</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		token: state.token,
	};
};

const mapDispatchToProps = dispatch => {
    return {
        isLoggedIn: () => dispatch(actions.authCheckState()),
        logout: () => dispatch(actions.logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientProfile);
