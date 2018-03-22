
import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Images from '../assets/images'
import screen from '../helpers/ScreenSize'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {}
export default class BoilComponent extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 300, height: 300}}
          source={Images.slice} 
        />
        <Text style={styles.welcome}>
          Welcome My React Native Boilerplate!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit BoilerComponent.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#FFD87B',
    height: screen.height, 
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
