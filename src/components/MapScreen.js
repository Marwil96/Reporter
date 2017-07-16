/* eslint-disable eol-last */

import React, { Component } from 'react';
import { Text, TextInput, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { CardSection, Card } from './common';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class MapScreen extends Component {

	constructor(props) {
    super(props)

    this.state = {
    	initialPosition:{
    		latitude: 0,
    		longitude: 0,
    		latitudeDelta: 0,
    		longitudeDelta: 0
    	},
    	markerPosition: {
    		latitude: 0,
    		longitude: 0
    	}
    
    }
  }
  watchID: ?number = null
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      	var lat = parseFloat(position.coords.latitude)
      	var long = parseFloat(position.coords.longitude)

      	var initialRegion = {
      		latitude: lat,
      		longitude: long,
      		latitudeDelta: LATITUDE_DELTA,
      		longitudeDelta: LONGITUDE_DELTA
      	}
        this.setState({initialPosition: initialRegion})
        this.setState({markerPosition: initialRegion})
        console.log(this.state.initialPosition);
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

      this.watchID = navigator.geolocation.watchPosition((position) => {
      	var lat = parseFloat(position.coords.latitude)
      	var long = parseFloat(position.coords.longitude)

      	var lastRegion = {
      		latitude: lat,
      		longitude: long,
      		longitudeDelta: LONGITUDE_DELTA,
      		latitudeDelta: LATITUDE_DELTA
      	}
      	this.setState({initialPosition: lastRegion})
      	this.setState({markerPosition: lastRegion})
      })
      
  }
  componentWillMount() {
  	navigator.geolocation.clearWatch(this.watchID)
  }

 





	render() {
		const { mapStyle, inputStyle } = styles;
		
		return (
			<View>
				<MapView
					style={mapStyle}
				    region={this.state.initialPosition}
				    
				  >
					  <MapView.Marker
					  coordinate={this.state.markerPosition}>
					  </MapView.Marker>
				  </MapView>
			</View>
		
		);
	}
}

const styles = {
	mapStyle: {
		position: 'absolute',
	    top: -11,
	    left: 0,
	    right: 0,
	    bottom: 0,
	    height: SCREEN_HEIGHT,
	    alignSelf: 'stretch'
	},
	inputStyle: {
		   position: 'absolute',
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0,
	    justifyContent: 'flex-end',
	    alignItems: 'center',
	}
};


export default MapScreen;