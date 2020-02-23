/* Client Profile Management Page by Andrew Vieira Feb 2020 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App';*/
import {Field, Button, Navigation} from './components';
import * as serviceWorker from './serviceWorker';

class ClientProfile extends React.Component {
	render() {
		return (
			<div id="clientprofile">
				<div id = "navigation">
					<Navigation/>
				</div>
				<div id = "title">
					<h1>John Doe's Profile</h1>
				</div>
				<div id="fields">
					<Field name = "Name" id = "name" value = "John Doe"/>
					<Field name = "Address 1" id = "address1" value = "White House"/>
					<Field name = "Address 2" id = "address2" value = "Secret Bunker 123"/>
					<Field name = "City" id = "city" value = "Washington D.C."/>
					<label>State:</label>
					<select>
						<option value="AL">AL</option>
						<option value="KS">KS</option>
						<option value="TX">TX</option>
						<option value="WA">WA</option>
					</select>
					<Field name = "Zipcode" id = "zipcode" value = "12345"/>
				</div>
				<div>
				<Button name = "Update Profile"/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<ClientProfile/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
