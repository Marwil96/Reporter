/* eslint-disable eol-last */
import React from 'react';
import { Text, TouchableOpacity, Dimensions, View } from 'react-native';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;

const RoundButton = ({ onPress, children }) => {
	const { buttonStyle, textStyle, container } = styles; 
	return (
		<View style={container}>
			<TouchableOpacity onPress={onPress} style={buttonStyle}>
				<Text style={textStyle}>
					{children}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = {
	container: {
	    flex:1,
	    flexDirection: 'column',
	    alignItems: 'center',
	    top:SCREEN_HEIGHT*0.9,
	    position:'relative'
  	},
	textStyle: {
		alignSelf: 'center',
		color: 'white',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 12,
		paddingBottom: 12
	},
	buttonStyle: {
		alignSelf: 'center',
		backgroundColor: '#fff',
		borderRadius: 100,
		width: SCREEN_WIDTH * 0.7,
		backgroundColor: '#1DA1F2',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: -2 },
		shadowOpacity: 0.3,
		shadowRadius: 12,
		elevation: 2,
		height: SCREEN_HEIGHT*0.07,
	}
};
export { RoundButton };