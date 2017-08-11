/* eslint-disable eol-last */

import React, { Component } from 'react';
import { Text, TextInput, View, Picker, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import MapScreen from './MapScreen';
import { textChange, subjectChange, saveComplaint, navigationsSaver } from '../actions';
var cities = require('../json/kommuner.geo.json');
import { CardSection, Card, JiroInput, Button, LargeInput, ExitButton, Spinner } from './common';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width

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
		if(this.props.text == '' && this.props.subject == '') {
			console.log('ingen information');
		} else {
			this.props.saveComplaint({ text, subject, navigation });
			this.props.onAnimate();
		}
	}

	onTextChange(text) {
		this.props.navigationsSaver( {latitude:this.state.latitude, longitude:this.state.longitude });
		this.props.textChange(text);
	}

	onSubjectChange(text) {
		this.props.subjectChange(text);
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		
			return ( 
				<Button onPress={this.onButtonPress.bind(this)}> Send </Button>
				);		
	}

	
	render() {
		return (
			<View style={styles.cardStyle}>
				<CardSection>
					<JiroInput 
							label="Problem"
							placeholder="..."
							icon="user"
							onChangeText={this.onSubjectChange.bind(this)}
							value={this.props.subject}
						/>
						
				</CardSection>
				<CardSection>
					<JiroInput 
							label="Problem"
							placeholder="..."
							icon="user"
							onChangeText={this.onSubjectChange.bind(this)}
							value={this.props.subject}
						/>

						<JiroInput 
							label="Problem"
							placeholder="..."
							icon="user"
							onChangeText={this.onSubjectChange.bind(this)}
							value={this.props.subject}
						/>
				</CardSection>

				<CardSection>
					<LargeInput 
							label="Problem"
							placeholder="..."
							onChangeText={this.onTextChange.bind(this)}
							value={this.props.text}
						/>
						<ExitButton children="X" onPress={this.props.onAnimate} />
				</CardSection>
						{/* 
						Picker with json information
						<Picker
						>
							{cities.map(city => (
								<Picker.Item 
								key={city.kod}
								label= {city.namn}
								value= {city.namn} 
								/>
								))}
						</Picker>
					*/}

				<CardSection>
					{this.renderButton()}
				</CardSection>

			</View>
		);
	}
}

const styles = {
	cardStyle: {
		top: 200
	}
}

const mapStateToProps = ({ auth }) => {
	const { text, subject, navigation, loading  } = auth;

	return { text, subject, navigation, loading };
};


export default connect(mapStateToProps, { textChange, subjectChange, saveComplaint, navigationsSaver })(InputField);