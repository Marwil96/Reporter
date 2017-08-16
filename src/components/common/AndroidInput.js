/* eslint-disable eol-last */
import React from 'react';
import { TextInput, View, Text, Dimensions } from 'react-native';
import { TextField } from 'react-native-material-textfield';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width

const AndroidInput = ({ label, value, onChangeText, placeholder, secureTextEntry, containerHeight, inputHeight, borderBottomWidth, borderRightWidth, multiline }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={[containerStyle, {height:containerHeight}, {borderBottomWidth:borderBottomWidth}, {borderRightWidth:borderRightWidth}]}>
			<TextField
				secureTextEntry={secureTextEntry}
				label={label}
				placeholder={placeholder} 
				autoCorrect={true}
				value={value}
				onChangeText={onChangeText}
				multiline={multiline}
				
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 1,
		alignItems: 'flex-start',
		width: 200,
		fontFamily:'Roboto-Regular'
		
		

	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1,
		fontFamily:'Roboto-Thin'
	},
	containerStyle: {
		 marginHorizontal: 4,
    marginVertical: 8,
    paddingHorizontal: 8,
		
	} 
};

export { AndroidInput };