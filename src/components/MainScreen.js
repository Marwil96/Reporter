/* eslint-disable eol-last */

import React, { Component } from 'react';
import { Text, TextInput, View, Animated } from 'react-native';
import { connect } from 'react-redux';
import MapScreen from './MapScreen';
import InputField from './InputField';
import { textChange } from '../actions';
import { CardSection, Card, Input, RoundButton } from './common';

class MainScreen extends Component {
		componentWillMount() {
			this.position = new Animated.ValueXY();
		}
		animateOnButtonPress() {
    Animated.timing(this.position, {
      toValue: { x: 0, y: -450 },
      duration: 1500
    }).start();
  }

	onTextChange(text) {
		this.props.saveComplaint(text);
	}

	render() {
		return (
			<View >
				<MapScreen />
				<RoundButton onPress={this.animateOnButtonPress.bind(this)} children={ 'Report' }/>
				<Animated.View style={this.position.getLayout()}>
					<InputField />
				</Animated.View>
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