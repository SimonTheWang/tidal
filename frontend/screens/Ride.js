import React from 'react';
import {
  StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView
} from 'react-native';

export const Ride = ({navigation, route}) => {
	return (
		<View style={styles.container}>
			<ImageBackground source={require('../assets/wave.png')} style={styles.image}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Wave.io')
          }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Copy link</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Wave.io')
          }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Let us do the job</Text>
            </View>
          </TouchableOpacity>
        </View>
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
    marginVertical: 40,
    width: 300,
    height: 200,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30
  },
})
