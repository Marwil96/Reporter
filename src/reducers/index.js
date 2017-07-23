/* eslint-disable eol-last */
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NavigationReducer from './NavigationReducer';


export default combineReducers({
	auth: AuthReducer,
	cordinates: NavigationReducer
});