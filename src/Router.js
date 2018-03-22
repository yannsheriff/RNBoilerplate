// Libs Imports
// ----------------------------
import React, { Component, } from 'react';
import { StackNavigator } from 'react-navigation';

// Scenes Imports
// ----------------------------
import BoilComponent from './components/BoilComponent';



const InitialNavigator = StackNavigator({
  Home: {
    screen: BoilComponent
  }
},
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    cardStyle: {
      backgroundColor: 'transparent'
    }
  })


  export default InitialNavigator



