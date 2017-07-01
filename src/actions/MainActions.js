/* eslint-disable eol-last */
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { TEXT_CHANGE, SUBJECT_CHANGE, SAVED_COMPLAINT } from './types';

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
export const saveComplaint = ({ text, subject }) => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		dispatch({ type: SAVED_COMPLAINT });
		firebase.database().ref(`/users/${currentUser.uid}/complaints`)
		.push({ text, subject });
	};
};
