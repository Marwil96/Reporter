/* eslint-disable eol-last */

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import Geocoder from 'react-native-geocoder';
import { TEXT_CHANGE, SUBJECT_CHANGE, SAVED_COMPLAINT, NAVIGATION_SAVE, CORDINATES_FETCH_SUCCESS, SAVED_COMPLAINT_SUCCESS, SAVED_COMPLAINT_FAIL } from './types';

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
	return (dispatch) => {
	dispatch({ type: SAVED_COMPLAINT });
	var currentLocation = {
	  lat: navigation.latitude,
	  lng: navigation.longitude
	};
	Geocoder.geocodePosition(currentLocation).then(res => {
		var currentCity = res[0].locality;
		console.log('inFunction', res[0].locality )
		saveComplaintSuccess(dispatch, currentCity, text, subject, navigation)
	})
	 .catch(() => savedComplaintFail(dispatch));
	 };
};

export const fetchCordinates = () => {
	const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/complaints`)
      .on('value', snapshot => {
        dispatch({ type: CORDINATES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};


const savedComplaintFail = (dispatch) => {
	dispatch({ type: SAVED_COMPLAINT_FAIL });
};

const saveComplaintSuccess = (dispatch, currentCity, text, subject, navigation) => {
	console.log('saveComplaintSuccess', currentCity, text, subject, navigation);
	const { currentUser } = firebase.auth();
	firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/complaints`)
	.push({ text, subject, navigation, currentCity });	
	dispatch({
		type: SAVED_COMPLAINT_SUCCESS,
		payload: user
	});
};