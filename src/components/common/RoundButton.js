/* eslint-disable eol-last */
import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height;

const RoundButton = ({ onPress, children }) => {
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
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		width:200,
		alignSelf: 'center',
		backgroundColor: '#fff',
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5,
		flex: 1,
		marginTop: SCREEN_HEIGHT*0.7,
		position: 'absolute'
	}
};
export { RoundButton };