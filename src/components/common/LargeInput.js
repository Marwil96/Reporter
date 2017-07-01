/* eslint-disable eol-last */
import React from 'react';
import { TextInput, View, Text } from 'react-native';

const LargeInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder} 
				autoCorrect={true}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
				multiline={true}
				
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
		flex: 2,
		alignItems: 'flex-start',
		height: 100

	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height: 200,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start'
	} 
};

export { LargeInput };