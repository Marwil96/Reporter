/* eslint-disable eol-last */

import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import MapScreen from './MapScreen';
import { textChange, subjectChange, saveComplaint, navigationsSaver } from '../actions';
import { CardSection, Card, Input, Button, LargeInput, ExitButton } from './common';

class InputField extends Component {
	constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }


	onButtonPress() {
		const { text, subject, navigation } = this.props;
		this.props.saveComplaint({ text, subject, navigation });
		this.props.onAnimate();
	}

	onTextChange(text) {
		this.props.navigationsSaver( {latitude:this.state.latitude, longitude:this.state.longitude });
		this.props.textChange(text);
	}

	onSubjectChange(text) {
		this.props.subjectChange(text);
	}

	render() {
		return (
			<View style={styles.cardStyle}>
				<Card>
					<CardSection>
						<Input 
								label="Problem"
								placeholder="..."
								onChangeText={this.onSubjectChange.bind(this)}
								value={this.props.subject}
							/>
						<ExitButton children="X" onPress={this.props.onAnimate} />
					</CardSection>

					<CardSection>
						<LargeInput 
								label="Problem"
								placeholder="..."
								onChangeText={this.onTextChange.bind(this)}
								value={this.props.text}
							/>
					</CardSection>
					<CardSection>
						<Button onPress={this.onButtonPress.bind(this)}> Send </Button>
					</CardSection>

				</Card> 
			</View>
		);
	}
}

const styles = {
	cardStyle: {
		top: 700,
		position: 'relative'
	}
}

const mapStateToProps = ({ auth }) => {
	const { text, subject, navigation  } = auth;

	return { text, subject, navigation };
};


export default connect(mapStateToProps, { textChange, subjectChange, saveComplaint, navigationsSaver })(InputField);