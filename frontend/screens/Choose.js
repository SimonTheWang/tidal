import React from 'react';
import {
  StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image
} from 'react-native';
import * as Font from 'expo-font'

const TASKS = [
  'Plant something',
  'Clean a public area',
  'Medidate',
  'Exercise',
  'Meet a stranger',
  'Let someone know you appreciate them',
];

export const Choose = ({navigation}) => {	
  Font.useFonts({
    hunter: require('../assets/fonts/HuntersScript.ttf')
  })

	const tasks = TASKS.map((task) => {
    return (
      <View key={task}>
				<TouchableOpacity onPress={() => {
					navigation.navigate('TakePicture', {
						task: task,
					})
				}}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{task}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  })

  return (
    <View style={styles.container}>
    <Image source={require('../assets/wave.png')} style={styles.image}></Image>
				<View style={{alignItems: 'center', justifyContent: 'center'}}>
					{tasks}
				</View>
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: 'absolute',
    top: 200,
    left: -375
  },
});
