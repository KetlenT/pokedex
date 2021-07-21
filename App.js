import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Poppins_100Thin,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import List from './src/screens/Home/index'
import Details from './src/screens/Home/details'

const { Navigator, Screen } = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Navigator initialRouteName="Home">
        <Screen
          name="Home"
          component={List}
          options={{
            headerStyle: {
              backgroundColor: "#FF4C41",
            },
            headerTintColor: '#fff'
          }}
        />
        <Screen
          name="Details"
          component={Details}
          options={{
            headerStyle: {
              backgroundColor: "#FF4C41",
            },
            headerTintColor: '#fff'
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

