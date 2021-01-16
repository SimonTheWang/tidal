import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Choose, Welcome, TakePicture, Ride, ViewWave } from './screens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Wave.io" component={Welcome} options={{...screenOptions.welcome, title: "Tidal"}} />
        <Stack.Screen name="Choose" component={Choose} options={{...screenOptions.create, title: "Choose a Task"}} />
        <Stack.Screen name="TakePicture" component={TakePicture} options={{...screenOptions.create, title: "Take a Picture!"}} />
        <Stack.Screen name="Ride" component={Ride} options={{...screenOptions.create, title: "Ride the wave!"}} />
        <Stack.Screen name="ViewWave" component={ViewWave} options={({ route }) => ({...screenOptions.create, title: route.params.data.task})} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  welcome: {
    headerStyle: {
      backgroundColor: '#4172F0',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: '900',
      //fontFamily: 'Montserrat',
    },
  },
  create: {
    headerStyle: {
      backgroundColor: '#4172F0',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: '900'
    }
  }
}