import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const cardHeight = 0.25 * SCREEN_HEIGHT;
const cardWidth = 0.95 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class SwipeCard extends Component {
 

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.swipeCardStyle}>
          <Text style={styles.headerStyle}> hej </Text>
          <Text style={styles.text}> bablalbablalbx </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  headerStyle: {
    fontSize: 20,
    justifyContent:'center',
    textAlign:'center',
    fontWeight: 'bold'

  },
  container: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'flex-end',
    top: SCREEN_HEIGHT,
    zIndex: -15
  },
  text: {
    fontSize:15,
    paddingLeft:12
  },
  swipeCardStyle: {
    width: SCREEN_WIDTH*0.95,
    minHeight: cardHeight,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    flex:1,
    flexDirection: 'column',
    position: 'absolute',
    bottom:-cardHeight,
  }
};

export default SwipeCard;