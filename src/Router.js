/* eslint-disable eol-last */

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import OpenAppSettings from 'react-native-app-settings';
import firebase from 'firebase';
import AuthForm from './components/AuthForm';
import MainScreen from './components/MainScreen';
import IntroductionDeck from './components/IntroductionDeck';
import InputField from  './components/InputField';


const RouterComponent = () => {
	return (
		<Router >
			<Scene key='Welcomning'>
				<Scene key='intro' component={IntroductionDeck} hideNavBar={true} />
			</Scene>	

			<Scene key='auth' initial >
				<Scene key='login' component={AuthForm} title='Please Login' hideNavBar={true} />
			</Scene>
			<Scene key='main' >
				<Scene
					onLeft={() => {firebase.auth().signOut(), Actions.auth()}}
					onRight={() => OpenAppSettings.open()}
					leftTitle="Log Out" 
					rightTitle="Settnings"
					key='employeeList' 
					component={MainScreen} 
					title='MainScreen'
					navigationBarStyle={{backgroundColor:'#1DA1F2'}}
					titleStyle={{color:'#FFFFFF', fontFamily:'Roboto-Regular'}}
					leftButtonTextStyle={{color:'#FFFFFF', fontFamily:'Roboto-Regular'}}
					rightButtonTextStyle={{color:'#FFFFFF', fontFamily:'Roboto-Regular'}}
					initial
					
					 
				/>
				<Scene
					onLeft={() => Actions.main()}
					leftTitle="back" 
					key='inputField' 
					component={InputField} 
					title='Report Error'
				/>

			</Scene>
		</Router>
	);
};

export default RouterComponent;