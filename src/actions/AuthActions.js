/* eslint-disable eol-last */
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, NAME_CHANGE } from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text	
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const nameChange = (text) => {
	return {
		type: NAME_CHANGE,
		payload: text
	};
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
	dispatch({ type: LOGIN_USER });

	firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))
		.catch(() => loginUserFail(dispatch));
	};
};

export const signUpUser = ({ email, password, name }) => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch(() => loginUserFail(dispatch));

		firebase.database().ref(`/users/${currentUser.uid}/employees`)
		.push({ name });
	};
};

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});

	Actions.main();
};