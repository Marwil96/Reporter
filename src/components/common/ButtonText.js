/* eslint-disable eol-last */
import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width

const ButtonText = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles; 
	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: 'white',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		alignSelf: 'center',
	}
};
export { ButtonText };