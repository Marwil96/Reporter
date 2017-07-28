/* eslint-disable eol-last */
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, NAME_CHANGE, TEXT_CHANGE, SUBJECT_CHANGE, SAVED_COMPLAINT, NAVIGATION_SAVE, SAVED_COMPLAINT_SUCCESS, SAVED_COMPLAINT_FAIL } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false, name: '', text: '', subject: '', navigation: '' };

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: 'test@test.com' };
		case PASSWORD_CHANGED:
			return { ...state, password: 'password' };
		case NAME_CHANGE:
			return { ...state, name: action.payload };
		case LOGIN_USER:
			return { ...state, loading: true, error: '' };
		case TEXT_CHANGE:
			return { ...state, text: action.payload };
		case SUBJECT_CHANGE:
			return { ...state, subject: action.payload };
		case NAVIGATION_SAVE:
			return { ...state, navigation: action.payload };
		case SAVED_COMPLAINT:
			return { INITIAL_STATE, loading: true };
		case SAVED_COMPLAINT_SUCCESS:
			return { ...state, loading: false };
		case SAVED_COMPLAINT_FAIL:
			return { ...state, loading: false }
		case LOGIN_USER_SUCCESS:
			return { ...state, user: action.payload, error: '', loading: false, email: '', password: '', name:'' };
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed', password: '', loading: false };

		default:
			return state;
	}
};