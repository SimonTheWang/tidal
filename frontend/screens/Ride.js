import React from 'react';
import {
  StyleSheet, Text, View, Image, TouchableOpacity,
} from 'react-native';

export const Ride = ({navigation, route}) => {
	return (
		<View style={styles.container}>
			<Image source={require('../assets/wave.png')} style={styles.image}></Image>
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
