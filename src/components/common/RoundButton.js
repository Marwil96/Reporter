/* eslint-disable eol-last */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

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
		marginTop:400
	}
};
export { RoundButton };