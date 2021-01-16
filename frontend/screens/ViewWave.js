import React from 'react';
import {
  StyleSheet, Text, View, ImageBackground, TouchableOpacity
} from 'react-native';

export const ViewWave = ({navigation, route}) => {
	return (
		<View style={styles.container}>
			<ImageBackground source={require('../assets/wave.png')} style={styles.image}>
				// webview here
			</ImageBackground>
	</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
	},
	image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
    
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
    color: 'white',
    textAlign: 'center',
    font:{
      fontFamily: 'Montserrat'
    }
  },

})
