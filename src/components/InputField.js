/* eslint-disable eol-last */

import React, { Component } from 'react';
import { Text, TextInput, View, Picker, Dimensions, Platform } from 'react-native';
import { connect } from 'react-redux';
import MapScreen from './MapScreen';
import { TextField } from 'react-native-material-textfield';
import { textChange, subjectChange, saveComplaint, navigationsSaver, specificPositionChange } from '../actions';
var cities = require('../json/kommuner.geo.json');
import { CardSection, Card, JiroInput, Button, LargeInput, ExitButton, Spinner, AndroidInput } from './common';

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
		const { text, subject, specificPosition, navigation } = this.props;
		if(this.props.text == '' && this.props.subject == '') {
			console.log('ingen information');
		} else {
			this.props.saveComplaint({ text, subject, navigation, specificPosition });
		}
	}

	onTextChange(text) {
		this.props.navigationsSaver( {latitude:this.state.latitude, longitude:this.state.longitude });
		this.props.textChange(text);
	}

	onSubjectChange(text) {
		this.props.subjectChange(text);
	}
	onPositionChange(text) {
		this.props.specificPositionChange(text);
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		
			return ( 
				<View style={styles.buttonContainer}>
					<Button 
					onPress={this.onButtonPress.bind(this)}
					textColor={'#FFFFFF'}
					buttonColor={'#1DA1F2'}
					> Send </Button>
				</View>
				);		
	}
	renderForWhatDevice() {
		if(Platform.OS == 'android') {
			return (
				<View style={{flex: 0 }}>
						<AndroidInput 
							label="Subject"
							placeholder="Subject"
							onChangeText={this.onSubjectChange.bind(this)}
							value={this.props.subject}
							containerHeight= {SCREEN_HEIGHT*0.1}
							multiline={false}
						/>
				
				

					<AndroidInput 
							label="Cordinates"
							placeholder="Cordinates"
							value={JSON.stringify(this.state.latitude) + JSON.stringify(this.state.longitude)}
							containerHeight= {SCREEN_HEIGHT*0.1}
							multiline={false}
						/>

						<AndroidInput 
							label="Specific Place"
							placeholder="Specific place"
							icon="user"
							onChangeText={this.onPositionChange.bind(this)}
							value={this.state.specificPosition}
							containerHeight= {SCREEN_HEIGHT*0.1}
							multiline={false}
						/>
					<AndroidInput 
							label="Description"
							placeholder="Description"
							onChangeText={this.onTextChange.bind(this)}
							value={this.props.text}
							containerHeight= {SCREEN_HEIGHT*0.1}
							multiline={true}
						/>
						{/*<ExitButton children="X" onPress={this.props.onAnimate} /> */}
				</View>
				)

			}
			else {
				return(
					<View>
				<CardSection>
					<LargeInput 
							label="Problem"
							placeholder="Subject"
							onChangeText={this.onSubjectChange.bind(this)}
							value={this.props.subject}
							containerHeight= {SCREEN_HEIGHT*0.05}
							borderBottomWidth={1}
							multiline={false}
						/>
				
				</CardSection>

				<CardSection>
					<LargeInput 
							label="Problem"
							placeholder="Cordinates"
							value={JSON.stringify(this.state.latitude) + JSON.stringify(this.state.longitude)}
							containerHeight= {SCREEN_HEIGHT*0.05}
							borderBottomWidth={1}
							borderRightWidth={1}
							multiline={false}
						/>

						<LargeInput 
							label="Problem"
							placeholder="Specific place"
							icon="user"
							onChangeText={this.onPositionChange.bind(this)}
							value={this.state.specificPosition}
							containerHeight= {SCREEN_HEIGHT*0.05}
							borderBottomWidth={1}
							multiline={false}
						/>
				</CardSection>

				<CardSection>
					<LargeInput 
							label="Problem"
							placeholder="Description"
							onChangeText={this.onTextChange.bind(this)}
							value={this.props.text}
							containerHeight= {SCREEN_HEIGHT*0.3}
							multiline={true}
						/>
						{/*<ExitButton children="X" onPress={this.props.onAnimate} /> */}
				</CardSection>
				</View>
				)
			}
	}
	
	render() {
		return (
			<View style={styles.cardStyle}>

					{this.renderForWhatDevice()}
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
				<CardSection style={{flex:2}}>
					{this.renderButton()}
				</CardSection>

			</View>
		);
	}
}

const styles = {
	cardStyle: {
		top: SCREEN_HEIGHT*0.13,
		flex: 1
	},
	buttonContainer: {
		justifyContent:'center',
		flex: 1
	},
	containerStyle: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		borderBottomColor:'black',
		borderRightColor:'black',
	},
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		alignItems: 'flex-start',
		
	}
}
const mapStateToProps = ({ auth }) => {
	const { text, subject, navigation, loading, specificPosition  } = auth;

	return { text, subject, navigation, loading, specificPosition };
};


export default connect(mapStateToProps, { textChange, subjectChange, saveComplaint, navigationsSaver, specificPositionChange })(InputField);