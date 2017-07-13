/* eslint-disable eol-last */
/*
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { TEXT_CHANGE, SUBJECT_CHANGE, SAVED_COMPLAINT, NAVIGATION_SAVE } from './types';

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
*/