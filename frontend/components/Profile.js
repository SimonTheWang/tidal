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
			<Text style={styles.color}>{userData.username}</Text>
			<Text style={styles.color}>{userData.email}</Text>
			<Text></Text>
			<DataTable style={styles.color}>
				<DataTable.Header>
				<DataTable.Title><Text style={styles.color}>Achievements</Text></DataTable.Title>
				</DataTable.Header>
				<DataTable.Row>
				<DataTable.Cell><Text style={styles.color}>People Inspired</Text></DataTable.Cell>
				<DataTable.Cell numeric><Text style={styles.color}>{userData.peopleInspired}</Text></DataTable.Cell>
				</DataTable.Row>
				<DataTable.Row>
				<DataTable.Cell><Text style={styles.color}>Waves Started</Text></DataTable.Cell>
				<DataTable.Cell numeric><Text style={styles.color}>{userData.wavesStarted}</Text></DataTable.Cell>
				</DataTable.Row>
				<DataTable.Row>
				<DataTable.Cell><Text style={styles.color}>Total Contributions</Text></DataTable.Cell>
				<DataTable.Cell numeric><Text style={styles.color}>{userData.contributions}</Text></DataTable.Cell>
				</DataTable.Row>
			</DataTable>
		</>
	)
}

const getUserData = (username) => {
	// return null; add API get endpoint
	return {
		email: "Simonwg2001@email.com",
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
	color: {
		color:'#FFFFFF'
	},
});
