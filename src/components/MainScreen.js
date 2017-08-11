/* eslint-disable eol-last */

import React, { Component } from 'react';
import { Text, TextInput, View, Animated, Dimensions, Platform, Easing } from 'react-native';
import { connect } from 'react-redux';
import MapScreen from './MapScreen';
import InputField from './InputField';
import SwipeCard from './SwipeCard';
import { textChange } from '../actions';
import { CardSection, Card, Input, RoundButton } from './common';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
let ANIMATION_DISTANCE = height*0.95
let direction = 2;
const cardHeight = 0.29 * SCREEN_HEIGHT;

class MainScreen extends Component {
	constructor(props){
	    super(props);
	    this.animateInformation = this.animateInformation.bind(this);
	    this.state = {
	      buttonState: 'Report',
	      buttonPurpose: this.animateOnButton.bind(this),

	    }
	  }
		componentWillMount() {
			this.position = new Animated.ValueXY();
			this.informationPosition = new Animated.ValueXY();
			this.roundButtonPosition = new Animated.ValueXY();
			if (Platform.OS === 'ios')  {
				ANIMATION_DISTANCE = height *0.68
			}
			else {
				ANIMATION_DISTANCE = height * 0.87
			}
		}
		animateOnButton() {
		if(direction === 2) {
			this.setState({
		       buttonState: 'Exit',
		    });
		    Animated.timing(this.position, {
		      toValue: { x: 0, y: -SCREEN_HEIGHT*0.5 },
		      duration: 1500,
		      easing: Easing.linear
		    }).start();
		    Animated.timing(this.roundButtonPosition, {
		      toValue: { x: 0, y: -SCREEN_HEIGHT*0.52 },
		      duration: 1500,
		      easing: Easing.linear
    		}).start();
    		direction = 1;
		 }
		 else {
		 	this.setState({
		       buttonState: 'Report',
		    });
		    Animated.timing(this.position, {
		      toValue: { x: 0, y: SCREEN_HEIGHT*0.5 },
		      duration: 1500,
		      easing: Easing.linear
		    }).start();
		    Animated.timing(this.roundButtonPosition, {
		      toValue: { x: 0, y: 0 },
		      duration: 1500,
		      easing: Easing.linear
		    }).start();
		    direction = 2;
		    }

  }

  animateInformation() {
  	console.log(direction);
  	if(direction === 1) {
  	this.setState({
       buttonState: 'Report',
       buttonPurpose: this.animateOnButton.bind(this)
    });
    Animated.timing(this.informationPosition, {
      toValue: { x: 0, y: cardHeight },
      duration: 1200,
      easing: Easing.bounce
    }).start();
   
    Animated.timing(this.roundButtonPosition, {
      toValue: { x: 0, y: 0 },
      duration: 1200,
      easing: Easing.bounce
    }).start();
    direction = 2;
    }
    else {
    this.setState({
       buttonState: 'Exit',
       buttonPurpose: this.animateInformation.bind(this)
    });
    Animated.timing(this.informationPosition, {
      toValue: { x: 0, y: -cardHeight },
      duration: 1200,
      easing: Easing.bounce
    }).start();

    Animated.timing(this.roundButtonPosition, {
      toValue: { x: 0, y: -cardHeight },
      duration: 1200,
      easing: Easing.bounce
    }).start();
     direction = 1;
    }
}
	// renderRoundButton(childrenText) {
	// 	console.log('renderRoundButton',direction, childrenText);
	// 	return (
	// 		<Animated.View style={this.roundButtonPosition.getLayout()}>
	// 				<RoundButton onPress={this.animateOnButtonUp.bind(this)} children={ childrenText } />
	// 		</Animated.View>
	// 		)
		
	// }

	onTextChange(text) {
		this.props.saveComplaint(text);
	}

	render() {
		return (
			<View style={styles.container}>
				<MapScreen onInformationAnimate={this.animateInformation}/> 
				<Animated.View style={this.informationPosition.getLayout()}>
					<SwipeCard />
				</Animated.View>
				<View style={styles.bottomStyle}>
				<Animated.View style={this.roundButtonPosition.getLayout()}>
					<RoundButton onPress={ this.state.buttonPurpose } children={ this.state.buttonState } />
				</Animated.View>
				</View>

				<Animated.View style={this.position.getLayout()}>
					<InputField onAnimate={this.animateOnButton.bind(this)} />
				</Animated.View>

				
			</View> 
		);
	}
}

const styles = {
	container: {
	 flex:1,
    height:SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    position:'absolute',
    },
    bottomStyle: {
    	justifyContent:'flex-end'
    }
}

const mapStateToProps = ({ auth }) => {
	const { text  } = auth;

	return { text };
};

export default connect(mapStateToProps, { textChange })(MainScreen);