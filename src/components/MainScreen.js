/* eslint-disable eol-last */

import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import MapScreen from './MapScreen';
import InputField from './InputField';
import { textChange } from '../actions';
import { CardSection, Card, Input, RoundButton } from './common';

class MainScreen extends Component {

	onTextChange(text) {
		this.props.textChange(text);
	}

	render() {
		return (
			<View >
				<MapScreen />
				<InputField />
				<RoundButton  children={ 'Report' }/>
			</View> 
		);
	}
}

const styles = {
	mapInputStyle: {
		
	}
}

const mapStateToProps = ({ auth }) => {
	const { text  } = auth;

	return { text };
};

export default connect(mapStateToProps, { textChange })(MainScreen);