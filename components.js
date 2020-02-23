/* Components by Andrew Vieira Feb 2020 */

/* Feel free to edit any of these components to your needs
just remember that other files rely on these components */

import React from 'react';
import './index.css';

/* WARNING! Field is meant to collect one input, use a custom form if you want to
retrieve multiple elements! */
export function Field(props){
	return (
		<form className= "field">
			<label>{props.name}:</label>
			<input id={props.id} value={props.value}/>
		</form>
	);
}

export function Button(props){
	return <button>{props.name}</button>
}

/* Still under construction, use this as a placeholder for now*/
export function Navigation(){
	return (
		<div id="navigation">
			<h1>Website Header and Logo Here</h1>
			<h3>Navigation Bar Here</h3>
			<ul>
				<li>Client Profile</li>
				<li>Fuel Qoute Form</li>
				<li>Fuel Qoute History</li>
				<li>Logout</li>
			</ul>
		</div>
	);
}