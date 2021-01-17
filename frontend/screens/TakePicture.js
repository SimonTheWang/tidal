import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, Image, TouchableOpacity
} from 'react-native';
import { Camera } from 'expo-camera';
import * as Font from 'expo-font'

export const TakePicture = ({navigation, route}) => {
	const [hasPermission, setHasPermission] = useState(null);
	const [picture, setPicture] = useState(null)
	let camera = null

	Font.useFonts({
    hunter: require('../assets/fonts/HuntersScript.ttf')
  })

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
			<Image source={require('../assets/wave.png')} style={styles.image}></Image>
			{
				picture ? 

				<>
					<View style={styles.cameraContainer}>
						<Image style={{width: "100%", height: "100%"}} source={{uri: picture.uri}}></Image>
					</View>
					<TouchableOpacity onPress={() => {
						navigation.navigate('Ride')
					}}>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Ride the wave!</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => {
						setPicture(null)
					}}>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Retake picture</Text>
						</View>
					</TouchableOpacity> 
				</ >
					
				:

				<>
					<View style={styles.cameraContainer}>
						<Camera style={styles.camera} type={Camera.Constants.Type.back} ref={(ref) => {
							camera = ref
						}}>
						</Camera>
					</View>
					<TouchableOpacity onPress={async () => {
						setPicture(await camera.takePictureAsync())
					}}>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Take Picture</Text>
						</View>
					</TouchableOpacity>
				</ >
			}
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
	},
	image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: 'absolute',
    top: 200,
    left: -375
	},
	cameraContainer: {
		borderColor: "#5CCEFF",
		borderWidth: 10,
		height: 300,
		width: 300,
		marginVertical: "20%"
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
    fontFamily: 'hunter',
    color: 'white',
    textAlign: 'center'
  },
  camera: {
		height: "100%",
  }
})
