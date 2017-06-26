/* eslint-disable eol-last */

import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, onAccept, onDecline, visible }) => {
	const { containerStyle, textStyle, cardSection } = styles;

	return (
		<Modal
			visible={visible}
			transparent  
			animationType="slide"
			onRequestClose={() => {}}
		>
			<View style={containerStyle}>
				<CardSection style={cardSection}>
					<Text style={textStyle}>{children}</Text>
				</CardSection>

				<CardSection>
					<Button onPress={onAccept}>Yes</Button>
					<Button onPress={onDecline}>No</Button>
				</CardSection>
			</View>
		</Modal>
	);
};

const styles = {
	cardSection: {
		justifyContent: 'center'
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0,0,0,0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	}
};

export { Confirm };