import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, ImageBackground, TouchableOpacity
} from 'react-native';
import { Camera } from 'expo-camera';

export const TakePicture = ({navigation, route}) => {
	const [hasPermission, setHasPermission] = useState(null);
	  const [type, setType] = useState(Camera.Constants.Type.back);
	  useEffect(() => {
		(async () => {
		  const { status } = await Camera.requestPermissionsAsync();
		  setHasPermission(status === 'granted');
		})();
	  }, []);
	
	  if (hasPermission === null) {
		return <View />;
	  }
	  if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	  }
	return (
		<View style={styles.container}>      
			<Camera style={styles.camera} type={type}>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => {
						setType(
							type === Camera.Constants.Type.back
							? Camera.Constants.Type.front
							: Camera.Constants.Type.back
						);
						}}>
						<Text style={styles.text}> Flip </Text>
					</TouchableOpacity>
				</View>
      		</Camera>
			<ImageBackground source={require('../assets/wave.png')} style={styles.image}>
				<Text>
					User has chosen {route.params.task}
				</Text>
				<TouchableOpacity onPress={() => {
					navigation.navigate('Ride')
				}}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>DONE</Text>
					</View>
				</TouchableOpacity>
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
    textAlign: 'center'
  },
  camera:{
	  height: 300
  }
})
