/* Client Profile Management Page by Andrew Vieira Feb 2020 */

import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import App from './app';

import './index.css';

import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<ClientProfile/>, document.getElementById('root'));
ReactDOM.render((
	<BrowserRouter>
		<App/>
	</BrowserRouter>
	), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
