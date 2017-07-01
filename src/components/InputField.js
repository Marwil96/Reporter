/* eslint-disable eol-last */

import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import MapScreen from './MapScreen';
import { textChange, subjectChange } from '../actions';
import { CardSection, Card, Input, Button, LargeInput } from './common';

class InputField extends Component {

	onTextChange(text) {
		this.props.textChange(text);
	}

	onSubjectChange(text) {
		this.props.subjectChange(text);
	}

	render() {
		return (
			<Card >
				<CardSection>
					<Input 
							style={styles.mapInputStyle}
							label="Problem"
							placeholder="..."
							onChangeText={this.onSubjectChange.bind(this)}
							value={this.props.subject}
						/>
				</CardSection>

				<CardSection>
					<LargeInput 
							style={styles.mapInputStyle}
							label="Problem"
							placeholder="..."
							onChangeText={this.onTextChange.bind(this)}
							value={this.props.text}
						/>
				</CardSection>

			</Card> 
		);
	}
}

const styles = {
	mapInputStyle: {
		
	}
}

const mapStateToProps = ({ auth }) => {
	const { text, subject  } = auth;

	return { text, subject };
};


export default connect(mapStateToProps, { textChange, subjectChange })(InputField);