import React from 'react';
import {
  StyleSheet, View, Image,
} from 'react-native';
import { WebView } from 'react-native-webview';

export const ViewWave = ({navigation, route}) => {
  const mainPath = 'https:tidal-six.vercel.app/generate/'
  
  const curentUri = mainPath + '' + '?num=' + ''

	return (
    // <View style={styles.container}>
    //   <Image source={require('../assets/wave.png')} style={styles.image}></Image>
    //   {/* webview here */}
    // </View>
    <WebView source={{ uri: curentUri}}></WebView> 
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
	button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#5C80FF',
    marginVertical: 10,
    width: 300
  },
  buttonText: {
    //fontFamily: 'Montserrat',
    color: 'white',
    textAlign: 'center',
  },
})
