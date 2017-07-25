/* eslint-disable eol-last */

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import AuthForm from './components/AuthForm';
import MainScreen from './components/MainScreen';
import IntroductionDeck from './components/IntroductionDeck';


const RouterComponent = () => {
	return (
		<Router >
			<Scene key='Welcomning' >
				<Scene key='intro' component={IntroductionDeck} hideNavBar={true} />
			</Scene>	

			<Scene key='auth' >
				<Scene key='login' component={AuthForm} title='Please Login' />
			</Scene>
			<Scene key='main' >
				<Scene
					onRight={() => Actions.employeeCreate()}
					rightTitle="Add" 
					key='employeeList' 
					component={MainScreen} 
					title='MainScreen'
					initial 
				/>

			</Scene>
		</Router>
	);
};

export default RouterComponent;