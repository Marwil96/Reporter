/* eslint-disable eol-last */

import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import MapScreen from './MapScreen';
import { textChange } from '../actions';
import { CardSection, Card, Input } from './common';

class MainScreen extends Component {

	onTextChange(text) {
		this.props.textChange(text);
	}

	render() {
		return (
			<View>
				<MapScreen />
				<Input 
						label="Problem"
						placeholder="..."
						onChangeText={this.onTextChange.bind(this)}
						value={this.props.text}
					/>
			</View>
		);
	}
}


const mapStateToProps = ({ auth }) => {
	const { text  } = auth;

	return { text };
};

export default connect(mapStateToProps, { textChange })(MainScreen);