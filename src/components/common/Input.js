/* eslint-disable eol-last */
import React from 'react';
import { TextInput, View, Text, Dimensions } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, icon }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			  <Fumi
				    label={label}
				    iconClass={FontAwesomeIcon}
				    iconName={icon}
				    iconColor={'#f95a25'}
				    iconSize={20}
				    inputStyle={styles.inputStyle}
				    secureTextEntry={secureTextEntry} 
					autoCorrect={false}
					value={value}
					onChangeText={onChangeText}
				  />
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		justifyContent:'center',
		alignItems: 'center',
		width: SCREEN_WIDTH*0.75,
		paddingVertical: 0,
		fontFamily:'Roboto-Light'

	},
	containerStyle: {
		height: SCREEN_HEIGHT*0.1,
		width: SCREEN_WIDTH,
		flex: 1,
		flexDirection: 'row',
		justifyContent:'center',
		alignItems: 'center',
    	borderBottomColor: '#d6d7da',
    	paddingVertical: 0
	} 
};

export { Input };