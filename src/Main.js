import React from 'react';
import {
    AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import SplashScreen from './screen/SplashScreen'
import Login from './screen/Login'

const Main = StackNavigator({
    SplashScreen: { screen: SplashScreen },
    Login:{screen : Login}
});

AppRegistry.registerComponent('RentlyRenterReact', () => Main);
