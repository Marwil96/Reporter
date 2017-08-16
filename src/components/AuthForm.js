/* eslint-disable eol-last */
import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { loginUser, signUpUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner, ButtonText } from './common';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;


class AuthForm extends Component {
	state = { loginState: false }

	onButtonPress() {
		const { email, password, name } = this.props;
		if(this.state.loginState === false){
		this.props.loginUser({ email, password });
		} 

		else {
			this.props.signUpUser({ email, password, name });
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		
			return ( 
				<Button 
					onPress={this.onButtonPress.bind(this)}
					textColor={'#1DA1F2'}
					buttonColor={'#FFFFFF'}
				>
					Login
				</Button>
				);		
	}

	renderForm() {
		if(this.state.loginState) {
			return (
				<SignUpForm />
				)
		}

			return (
				<LoginForm />
				)
	}
	changeLoginButton() {
		if(this.state.loginState === true) {
			return(
			<View style={styles.changeLoginStateContainer}>
				<Text style={styles.signUpText}>Dont have an account?</Text>
				<ButtonText onPress={() => this.setState({ loginState: false })} > Login </ButtonText>
			</View>
			)
		} 
			return(
				<View style={styles.changeLoginStateContainer}>
					<Text style={styles.signUpText}>Have an account?</Text>
					<ButtonText onPress={() => this.setState({ loginState: true })}> SignUp </ButtonText>
				</View>
				)
	}

	render() {
		return (
			<View style={styles.container}>
					<View style={styles.rubrikContainer} >
						<Text style={styles.rubrikStyle} >Reporter</Text>
					</View>
					<Text style={styles.errorTextStyle}>
						{ this.props.error }
					</Text>
					<View style={styles.formContainer} >
					{this.renderForm()}
					</View>
					<View style={styles.buttonContainer}>
						{this.renderButton()}
					</View>
					{this.changeLoginButton()}
			</View>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	},
	container: {
		height: SCREEN_HEIGHT,
		width: SCREEN_WIDTH,
		backgroundColor: '#1DA1F2',
		flex:1,
		flexDirection:'column'
		
	},
	rubrikContainer: {
		flexDirection:'row',
		justifyContent:'center',
		flex: 1.5
	},
	rubrikStyle: {
		fontSize:48,
		top:SCREEN_HEIGHT*0.1,
		color:'white',
		fontFamily:'Roboto-Black'
	},
	formContainer:{
		justifyContent:'center',
		flex: 3
	},
	buttonContainer:{
		justifyContent:'center',
		flex: 1
	},
	signUpText: {
		justifyContent:'center',
		alignSelf: 'center',
		color: 'white',
		fontFamily:'Roboto-Regular'
	},
	changeLoginStateContainer: {
		justifyContent:'center',
		flex: 1.5
	}
};

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading, name } = auth;

	return { email, password, error, loading, name };
};

export default connect(mapStateToProps, { loginUser, signUpUser })(AuthForm);