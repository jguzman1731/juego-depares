import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Nivel1 from './Nivel1';
import HomeScreen from './HomeScreen';
import Header from './components/Header';
import Nivel2 from './Nivel2';
import Nivel3 from './Nivel3';

//StatusBar en LightMode

//StatusBar.setBarStyle('light-content', true);

//StatusBar en DarkMode

StatusBar.setBarStyle('dark-content', true);



const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
           screenOptions={{
             headerShown: false,
           }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Nivel-1"
            component={Nivel1}
          />
          <Stack.Screen
            name="Nivel-2"
            component={Nivel2}
          />
          <Stack.Screen
            name="Nivel-3"
            component={Nivel3}
          />
          <Stack.Screen
            name="Header"
            component={Header}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


