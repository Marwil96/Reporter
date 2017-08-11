import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  PanResponder,
  Dimensions,
  UIManager
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const cardHeight = 0.2 * SCREEN_HEIGHT;
const cardWidth = 0.8 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class SwipeCard extends Component {
 

  render() {
    return (
      <View style={styles.swipeCardStyle}>
        <Text style={styles.headerStyle}> {children} </Text>
        <Text style={styles.text}> {children2} </Text>
      </View>
    );
  }
}

const styles = {
  headerStyle: {
    fontSize: 30

  },
  text: {
    fontSize:20
  },
  swipeCardStyle: {
    width: cardWidth,
    height: cardHeight,
    backgroundColor: 'black',
    borderRadius: 20,
    borderWidth: 1,
    flex:1,
    position: 'absolute'
  }
};

export {SwipeCard};