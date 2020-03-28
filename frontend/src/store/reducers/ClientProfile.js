import * as ActionTypes from '../actions/ActionTypes';
import { updateObject } from '../utility';

const initialState = {
	profile: null,

	error: null,
	loading: false
};

const getClientProfileSuccess = (state, action) => {
	return updateObject(state, {
		profile: action.profile,
		error: null,
		loading: false
	});
};

const getClientProfileFail = (state, action) => {
	return updateObject(state, {
		error: action.error,
		loading: false
	});
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.GET_CLIENT_PROFILE_START:
			return getClientProfileStart(state, action);
		case actionTypes.GET_CLIENT_PROFILE_SUCCESS:
			return getClientProfileSuccess(state, action);
		case actionTypes.GET_CLIENT_PROFILE_FAIL:
			return getClientProfileFail(state, action);
		default:
			return state;
	}
};

export default reducer;