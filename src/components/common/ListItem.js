/* eslint-disable eol-last */

import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';


const ListItem = ({ cordinates }) => {
		console.log(cordinates.navigation);
		return (
			<TouchableWithoutFeedback >
				<View>
						<Text style={styles.titleStyle}>
							Wop
						</Text>
				</View>
			</TouchableWithoutFeedback>
		);
}

const styles = {
	titleStyle: {
		position: 'absolute',
		fontSize: 18,
		paddingLeft: 15
	}
};

export { ListItem };