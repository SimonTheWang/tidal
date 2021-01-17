import React from 'react'
import {
  StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview';

export const ViewWave = ({navigation, route}) => {
  const mainPath = 'https://tidal-six.vercel.app/generate/'

  const curentUri = mainPath + route.params.data.task 
  + '?num=' + (route.params.data.contributors? route.params.data.contributors: '25') 
  + '&&root=' + route.params.data.author
  + '&&date=' + route.params.data.date
  console.log(curentUri)
	return (
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
    //fontFamily: 'hunter',
    color: 'white',
    textAlign: 'center',
  },
})
