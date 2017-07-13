/* eslint-disable eol-last */
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, NAME_CHANGE, TEXT_CHANGE, SUBJECT_CHANGE, SAVED_COMPLAINT, NAVIGATION_SAVE } from './types';

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
	console.log(email, password);
	return (dispatch) => {
	dispatch({ type: LOGIN_USER });

	firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))
		.catch(() => loginUserFail(dispatch));

	};
};

export const signUpUser = ({ email, password, name }) => {
	console.log(email, password, name);
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.then(saveCredentials(name,email))
			.catch(() => loginUserFail(dispatch));
	};
};

export const textChange = (text) => {
	return {
		type: TEXT_CHANGE,
		payload: text	
	};
};

export const subjectChange = (text) => {
	return {
		type: SUBJECT_CHANGE,
		payload: text	
	};
};

export const navigationsSaver = (text) => {
	console.log(text);
	return {
		type: NAVIGATION_SAVE,
		payload: text	
	};
};
export const saveComplaint = ({ text, subject, navigation }) => {
	const { currentUser } = firebase.auth();
	console.log(navigation, text, subject, currentUser, firebase.auth().currentUser.uid);
	if(currentUser){
		return (dispatch) => {
			dispatch({ type: SAVED_COMPLAINT });
			firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/complaints`)
			.push({ text, subject, navigation});
		};
	}
	else {
		console.log("Complaint saknar anvandare");
	}
};

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });

};

const loginUserSuccess = (dispatch, user) => {
	console.log(firebase.auth().currentUser.uid);
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});

	Actions.main();
};

const saveCredentials = ( name, email ) => {
		const { currentUser } = firebase.auth();
		if(currentUser){
			firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/credentials`)
			.push( name, email );
		}
		else {
			console.log("No user")
		}
};