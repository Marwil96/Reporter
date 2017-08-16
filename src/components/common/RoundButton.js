/* eslint-disable eol-last */
import React from 'react';
import { Text, TouchableOpacity, Dimensions, View, Platform } from 'react-native';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;

const RoundButton = ({ onPress, children }) => {
	const { buttonStyle, textStyle, container } = styles; 
	return (
		<View style={container}>
			<TouchableOpacity onPress={onPress} style={[buttonStyle, {zIndex: Platform.OS == 'android' ? 40 : 0}, {bottom: Platform.OS == 'android' ? 30 : 0}]}>
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
	    position:'relative',
  	},
	textStyle: {
		alignSelf: 'center',
		color: 'white',
		fontSize: 20,
		fontFamily:'Roboto-bold',
		paddingTop: 10,
		paddingBottom: 10
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