/* eslint-disable eol-last */

import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import { CardSection, Card } from './common';

class Main extends Component {

	constructor(props) {
 super(props);
 this.state = { text: 'PlaceHolder' };
  }

	render() {
		const { textStyle, inputStyle } = styles;
		
		return (
			<CardSection>
				<Card>
					<Text style={textStyle}> Wop </Text>
				</Card>
				<TextInput 
				{...this.props}
				style={inputStyle}
				multiline
				value={this.state.text}
				onChangeText={(text) => this.setState({ text })}
				editable
				/>
			</CardSection>
		);
	}
}

const styles = {
	textStyle: {
		fontSize: 18
	},
	inputStyle: {
		fontSize: 18,
		height: 300,
		width: 300,
		borderColor: 'black',
		borderWidth: 5,
		padding: 26,
		marginTop: 300
	}
};

export default Main;