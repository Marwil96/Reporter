import React, { Component } from 'react';
import { AppRegistry, Alert, View, Text } from 'react-native';
import AppIntro from 'react-native-app-intro';
import { Actions } from 'react-native-router-flux';

class IntroductionDeck extends Component {
  doneBtnHandle() {
    Actions.auth()
  }
  onSkipBtnHandle(){
    Actions.auth()
  }
  render() {
    return (
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
        showDots={true}
      >
     <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
          <View level={10}><Text style={styles.headerText}>Välkommen</Text></View>
          <View level={5}><Text style={styles.text}>till Reporter</Text></View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
          <View level={-10}><Text style={styles.headerText}>Wazzup</Text></View>
          <View level={5}><Text style={styles.text}>Page 2</Text></View>
          <View level={20}><Text style={styles.text}>Page 2</Text></View>
        </View>
        <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
          <View level={8}><Text style={styles.headerText}>Får Lätt Information</Text></View>
          <View level={-10}><Text style={styles.text}>Page 3</Text></View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
          <View level={5}><Text style={styles.headerText}>Page 4</Text></View>
          <View level={10}><Text style={styles.text}>Page 4</Text></View>
        </View>
        </AppIntro>
      )
  }
    
}

const styles = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'normal',
  },
  headerText: {
    color: '#fff',
    fontSize: 45,
    fontWeight: 'bold',
  },
}

export default IntroductionDeck;