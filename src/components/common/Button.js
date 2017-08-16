/* eslint-disable eol-last */
import React from 'react';
import { Text, TouchableOpacity, Dimensions, Platform } from 'react-native';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width

const Button = ({ onPress, children, buttonColor, textColor}) => {
	const { buttonStyle, textStyle } = styles; 
	return (
		<TouchableOpacity onPress={onPress} style={[buttonStyle, {backgroundColor:buttonColor}]}>
			<Text style={[textStyle, {color:textColor}]}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		fontSize: 20,
		fontFamily:'Roboto-bold',
		paddingTop: 10,
		paddingBottom: 10,
		justifyContent:'center'
	},
	buttonStyle: {
		alignSelf: 'center',
		borderRadius: 100,
		width: SCREEN_WIDTH * 0.7,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: -2 },
		shadowOpacity: 0.3,
		shadowRadius: 12,
		elevation: 2,
		height: SCREEN_HEIGHT*0.07,
		flexDirection:'column'
	}
};
export { Button };