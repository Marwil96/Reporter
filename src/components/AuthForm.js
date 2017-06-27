/* eslint-disable eol-last */
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { loginUser, signUpUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';


class AuthForm extends Component {
	state = { loginState: false }

	onButtonPress() {
		const { email, password } = this.props;
		if(this.state.loginState === false){
		this.props.loginUser({ email, password });
		} 

		else {
			this.props.signUpUser({ email, password });
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		
			return ( 
				<Button onPress={this.onButtonPress.bind(this)}>
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

	render() {
		return (
			<Card>
				<CardSection>
					<Button onPress={() => this.setState({ loginState: false })} > Login </Button>
					<Button onPress={() => this.setState({ loginState: true })}> SignUp </Button>
				</CardSection>
				<Text style={styles.errorTextStyle}>
					{ this.props.error }
				</Text>
				{this.renderForm()}
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;

	return { email, password, error, loading };
};

export default connect(mapStateToProps, { loginUser, signUpUser })(AuthForm);