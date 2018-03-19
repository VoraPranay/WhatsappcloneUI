import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Welcomescreen from './Welcomescreen.js'
import Loginscreen from './Loginscreen2'
import Homescreen from './Homescreen'


const App = StackNavigator({

  Welcomescreen: { screen: Welcomescreen },
  Homescreen: { screen: Homescreen },
  Loginscreen: {
    screen: Loginscreen
  }
}, {
    initialRouteName: 'Welcomescreen'
  })


export default App 