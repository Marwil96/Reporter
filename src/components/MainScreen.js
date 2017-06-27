/* eslint-disable eol-last */

import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import MapView from 'react-native-maps';
import { CardSection, Card } from './common';

class Main extends Component {


	render() {
		const { textStyle, inputStyle } = styles;
		
		return (
			
				<MapView
					style={textStyle}
				    initialRegion={{
				      latitude: 37.78825,
				      longitude: -122.4324,
				      latitudeDelta: 0.0922,
				      longitudeDelta: 0.0421,
				    }}
				  />
				
		
		);
	}
}

const styles = {
	textStyle: {
		position: 'absolute',
	    top: 50,
	    left: 15,
	    right: 0,
	    bottom: 0,
	    width: 325,
	    height: 400
	},
	inputStyle: {
		   position: 'absolute',
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0,
	    justifyContent: 'flex-end',
	    alignItems: 'center',
	}
};

export default Main;