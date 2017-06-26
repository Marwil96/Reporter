/* eslint-disable eol-last */
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, NAME_CHANGE } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false, name: '' };

export default (state = INITIAL_STATE, action) => {

	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case NAME_CHANGE:
			return { ...state, name: action.payload };
		case LOGIN_USER:
			return { ...state, loading: true, error: '' };
		case LOGIN_USER_SUCCESS:
			return { ...state, user: action.payload, error: '', loading: false, email: '', password: '', name:'' };
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed', password: '', loading: false };

		default:
			return state;
	}
};