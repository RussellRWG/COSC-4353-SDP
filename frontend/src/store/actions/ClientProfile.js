import axios from 'axios';
import * as ActionTypes from './ActionTypes';

const getClientProfileStart = () => {
	return {
		type: ActionTypes.GET_CLIENT_PROFILE_START
	};
};

const getClientProfileSuccess = profile => {
	return {
		type: ActionTypes.GET_CLIENT_PROFILE_SUCCESS,
		profile
	};
};

const getClientProfileFail = error => {
	return {
		type: ActionTypes.GET_CLIENT_PROFILE_FAIL,
		error: error
	};
};

export const getClientProfile = (username, token) => {
	return dispatch => {
		dispatch(getClientProfileStart());
		axios.defaults.headers = {
			'Content-Type': 'application/json',
			Authorization: `Token ${token}`
		};
		axios
			.get(`http://localhost:8000/api/clientprofile/?username=${username}/`)
			.then(res => {
				const profile = res.data;
				dispatch(getClientProfileSuccess(profile));
			})
			.catch(err => {
				dispatch(getClientProfileFail(err));
			});
	};
};