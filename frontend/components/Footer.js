import React from 'react';
import {
  StyleSheet, Text, View, Button, ImageBackground, Image, TouchableOpacity as Touchable
} from 'react-native';

export const Footer = (props) => {
  return (
    <View style={styles.footer}>
      <Touchable onPress={() => { props.setAppState(props.AppState.HOME); }}>
        <Image
          name="home"
          size={50}
          source={require('../assets/home.png')}
        />
      </Touchable>
      <Touchable onPress={() => { props.onCreatePress(); }}>
        <Image
          size={50}
          source={require('../assets/add.png')}
        />
      </Touchable>
      <Touchable onPress={() => { props.setAppState(props.AppState.PROFILE); }}>
        <Image
          size={50}
          source={require('../assets/profile.png')}
        />
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    justifyContent: 'space-around',
		height: '10%',
    flexDirection: "row",
    borderTopColor: '#5cccfc',
    borderTopWidth: 0.2,
  },
});
