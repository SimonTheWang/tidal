import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Choose, Welcome, TakePicture, Ride, ViewWave } from './screens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Wave.io" component={Welcome} options={screenOptions.welcome} />
        <Stack.Screen name="Choose" component={Choose} options={screenOptions.create} />
        <Stack.Screen name="TakePicture" component={TakePicture} options={{...screenOptions.create, title: "Take a Picture!"}} />
        <Stack.Screen name="Ride" component={Ride} options={{...screenOptions.create, title: "Ride the wave!"}} />
        <Stack.Screen name="ViewWave" component={ViewWave} options={{...screenOptions.create, title: "Big wave!"}} />
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
      fontWeight: '900'
    },
    
    // headerBackground: () => {
    //   return (
    //     <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }} />
    //   )
    // }
  },
  create: {
    headerStyle: {
      backgroundColor: '#4172F0',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: '900'
    },
  }
}