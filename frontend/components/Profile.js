import React, { useEffect, useState, useRef } from 'react'
import { Animated,Text, View  } from 'react-native';
import { StyleSheet, Image} from 'react-native';
import {Avatar, DataTable} from 'react-native-paper';

const FadeInView = (props) => {
	const x_change = useRef(new Animated.Value(0)).current;
	Animated.sequence(
		[Animated.timing(		
			x_change,
			{
			toValue: -440,
			duration: 2000,
			useNativeDriver: true
			}),
		]
	).start();
	return (
	  <Animated.View
		style={{
		  ...props.style,
		  transform: [{ translateX: x_change }, { translateY: x_change}]        // Bind opacity to animated value
		}}
	  >
		{props.children}
	  </Animated.View>
	);
  }
export const Profile = (props) => {
	const [userData, setUserData] = useState("");
	useEffect(() => {
		setUserData(getUserData(props.username))	
	}, []);
	return (
		<>
			<FadeInView>
				<Image source={require('../assets/wave.png')} style={styles.image}></Image>
			</FadeInView>
			<Avatar.Text size={48} label="SW" />
			<Text>{userData.username}</Text>
			<Text>{userData.email}</Text>
			<Text></Text>
			<DataTable>
				<DataTable.Header>
				<DataTable.Title>Achievements</DataTable.Title>
				</DataTable.Header>
				<DataTable.Row>
				<DataTable.Cell>People Inspired</DataTable.Cell>
				<DataTable.Cell numeric>{userData.peopleInspired}</DataTable.Cell>
				</DataTable.Row>
				<DataTable.Row>
				<DataTable.Cell>Waves Started</DataTable.Cell>
				<DataTable.Cell numeric>{userData.wavesStarted}</DataTable.Cell>
				</DataTable.Row>
				<DataTable.Row>
				<DataTable.Cell>Total Contributions</DataTable.Cell>
				<DataTable.Cell numeric>{userData.contributions}</DataTable.Cell>
				</DataTable.Row>
			</DataTable>
		</>
	)
}

const getUserData = (username) => {
	// return null; add API get endpoint
	return {
		email: "SimonWang@email.com",
		username: username,
		password: "password",
		peopleInspired: 183,
		wavesStarted: 7,
		contributions: 16,
		drops: [
			{
				task: "planting a tree",
				userId: "12345",
				picture: "string",
				time: "Jan 15th 2021",
				left: null,
				right: null,
			}
		]
	}
};

const getUserDrops = () => {
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
		position: "absolute",
		top: 200,
		left: -375
	},
});
