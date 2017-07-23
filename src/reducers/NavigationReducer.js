import { CORDINATES_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CORDINATES_FETCH_SUCCESS:
			console.log(action, action.payload);
			return action.payload;
		default:
			return state;
	}
};