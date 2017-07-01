/* eslint-disable eol-last */
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { TEXT_CHANGE, SUBJECT_CHANGE } from './types';

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

