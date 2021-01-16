import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import { Footer, Home, Profile } from '../components';


export const Welcome = (props) => {
  const AppState = Object.freeze({
    HOME: 0,
    PROFILE: 1,
  });

  const [appState, setAppState] = useState(AppState.HOME);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/wave.png')} style={styles.image}>
      </Image>
      <View style={styles.body}>
          {
            appState == AppState.HOME ? <Home handleChildClick={(data) => {
              props.navigation.navigate("ViewWave", {data})
            }} /> :
            appState == AppState.PROFILE ? <Profile username='Simon Wang' handleChildClick={(data) => {
              props.navigation.navigate("ViewWave", {data})
            }} /> : 
            <Text>monkaS</Text>
          }
        </View>
        <Footer setAppState={setAppState} AppState={AppState} onCreatePress={() => {
					props.navigation.navigate('Choose')
				}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: 'absolute',
		top: 200,
		left: -375
  },
});
