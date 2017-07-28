/* eslint-disable eol-last */

import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Text, TextInput, View, Dimensions, ListView } from 'react-native';
import MapView from 'react-native-maps';
import {fetchCordinates} from '../actions';
import { CardSection, Card, ListItem } from './common';

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
  	navigator.geolocation.clearWatch(this.watchID);

    this.props.fetchCordinates();

    console.log('componentWillMount', this.props.cordinates, this.state.cordinates ,this.props)

  }


/*
May Be used later
markerRender()  {
  const navigationCordinates = this.props.cordinates;
  for(i = 0; i < this.props.cordinates.length; i++){
    console.log('markerRender', navigationCordinates[i].navigation, this.props.cordinates.length, i)

    return( <MapView.Marker
            key={i}
            coordinate={navigationCordinates[i].navigation}>
    </MapView.Marker> );
    }
}*/



	render() {
		const { mapStyle, inputStyle } = styles;
		
		return (
			<View>
				<MapView
					style={mapStyle}
				    region={this.state.initialPosition}
            title={'Home'}
				    
				  >
					  <MapView.Marker
					  coordinate={this.state.markerPosition}>
					  </MapView.Marker>
            {this.props.cordinates.map(marker => (
            <MapView.Marker
              key={marker.uid} 
              coordinate={marker.navigation}
            />
          ))}
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

const mapStateToProps = state => {
  const cordinates = _.map(state.cordinates, (val, uid) => {
    return { ...val, uid };
  });
  return { cordinates };
};


export default connect(mapStateToProps, { fetchCordinates })(MapScreen);