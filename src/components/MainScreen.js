/* eslint-disable eol-last */

import React, { Component } from 'react';
import { Text, TextInput, View, Animated, Dimensions, Platform } from 'react-native';
import { connect } from 'react-redux';
import MapScreen from './MapScreen';
import InputField from './InputField';
import { textChange } from '../actions';
import { CardSection, Card, Input, RoundButton } from './common';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
let ANIMATION_DISTANCE = height*0.95

class MainScreen extends Component {
		componentWillMount() {
			this.position = new Animated.ValueXY();
			if (Platform.OS === 'ios')  {
				ANIMATION_DISTANCE = height *0.68
			}
			else {
				ANIMATION_DISTANCE = height * 0.87
			}
		}
		animateOnButtonUp() {
    Animated.timing(this.position, {
      toValue: { x: 0, y: -ANIMATION_DISTANCE },
      duration: 1500
    }).start();
  }

  animateOnButtonDown() {
    Animated.timing(this.position, {
      toValue: { x: 0, y: ANIMATION_DISTANCE },
      duration: 1500
    }).start();
  }

	onTextChange(text) {
		this.props.saveComplaint(text);
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<MapScreen />
				<RoundButton onPress={this.animateOnButtonUp.bind(this)} children={ 'Report' } style={styles.buttonPosition}/>
				<Animated.View style={this.position.getLayout()}>
					<InputField onAnimate={this.animateOnButtonDown.bind(this)} />
				</Animated.View>
			</View> 
		);
	}
}

const styles = {
	buttonPosition: {
		
	}
}

const mapStateToProps = ({ auth }) => {
	const { text  } = auth;

	return { text };
};

export default connect(mapStateToProps, { textChange })(MainScreen);