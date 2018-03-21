// Libs Imports
// ----------------------------
import React, { Component, } from 'react';
import { StackNavigator } from 'react-navigation';

// Scenes Imports
// ----------------------------
import App from './components/App';



const InitialNavigator = StackNavigator({
  Home: {
    screen: App
  }
},
  {
    headerMode: 'none',
    initialRouteName: 'LoginScreen',
    cardStyle: {
      backgroundColor: 'transparent'
    }
  })


  export default LoginNavigator



