/* eslint-disable eol-last */
import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width

const Button = ({ onPress, children }) => {
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
		color: '#1DA1F2',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10,
		justifyContent:'center'
	},
	buttonStyle: {
		alignSelf: 'center',
		backgroundColor: '#fff',
		borderRadius: 100,
		width: SCREEN_WIDTH * 0.7,
		backgroundColor: '#FFFFFF',
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