/* eslint-disable eol-last */

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import AuthForm from './components/AuthForm';
import MainScreen from './components/MainScreen';
import IntroductionDeck from './components/IntroductionDeck';
import InputField from  './components/InputField';


const RouterComponent = () => {
	return (
		<Router >
			<Scene key='Welcomning' >
				<Scene key='intro' component={IntroductionDeck} hideNavBar={true} />
			</Scene>	

			<Scene key='auth'  >
				<Scene key='login' component={AuthForm} title='Please Login' hideNavBar={true} />
			</Scene>
			<Scene key='main' initial >
				<Scene
					onRight={() => Actions.employeeCreate()}
					rightTitle="Add" 
					key='employeeList' 
					component={MainScreen} 
					title='MainScreen'
					 
				/>
				<Scene
					onRight={() => Actions.employeeCreate()}
					rightTitle="Add" 
					key='inputField' 
					component={InputField} 
					title='Report Error'
					initial
				/>

			</Scene>
		</Router>
	);
};

export default RouterComponent;