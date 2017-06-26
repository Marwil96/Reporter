/* eslint-disable eol-last */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
	componentWillMount() {
	const config = {
    apiKey: 'AIzaSyCGGmIk8JNW5PdClidW7eCA2_Dk623cDyM',
    authDomain: 'reporter-542cd.firebaseapp.com',
    databaseURL: 'https://reporter-542cd.firebaseio.com',
    projectId: 'reporter-542cd',
    storageBucket: 'reporter-542cd.appspot.com',
    messagingSenderId: '969966364433'
  };
  firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
				<Router />
			</Provider>
		);
	}
}

export default App;
