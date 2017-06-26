/* eslint-disable eol-last */
// import libaries
import React from 'react';
import { Text, View } from 'react-native'; 

// make compnents
const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}> 
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
		);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.05,
		elevation: 5,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

// make component available
export { Header };