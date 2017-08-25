/* eslint-disable eol-last */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, nameChange } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class SignUpForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}
	onNameChange(text) {
		this.props.nameChange(text);
	}

	render() {
		return (
			<View>
				<CardSection>
					<Input 
						label="Email"
						placeholder="email@gmail.com"
						icon="user"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input 
						secureTextEntry
						label="Password"
						placeholder="password"
						icon="key"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>
				<CardSection>
					<Input 
						label="Name"
						placeholder="..."
						icon="user"
						onChangeText={this.onNameChange.bind(this)}
						value={this.props.name}
					/>
				</CardSection>
			</View>
				)
			}
		}
const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading, name } = auth;

	return { email, password, error, loading, name };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, nameChange })(SignUpForm);