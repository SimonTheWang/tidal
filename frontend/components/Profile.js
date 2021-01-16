import React, { useEffect, useState, useRef } from 'react'
import { Animated,Text, View  } from 'react-native';
import { StyleSheet, Image, FlatList, } from 'react-native';
import {Avatar, DataTable} from 'react-native-paper';
import { Wave } from './Wave';

const FadeInView = (props) => {
	const x_change = useRef(new Animated.Value(0)).current;
	const y_change = useRef(new Animated.Value(0)).current;
	Animated.sequence(
		[
		Animated.timing(		
			x_change,
			{
			toValue: -250,
			duration: 500,
			useNativeDriver: true
			}),
		Animated.timing(		
			y_change,
			{
			toValue: -250,
			duration: 500,
			useNativeDriver: true
			}),
		Animated.timing(		
			x_change,
			{
			toValue: -500,
			duration: 500,
			useNativeDriver: true
			}),
		Animated.timing(		
			y_change,
			{
			toValue: -500,
			duration: 500,
			useNativeDriver: true
			}),
		]
	).start();
	return (
	  <Animated.View
		style={{
		  ...props.style,
		  transform: [{ translateX: x_change }, { translateY: y_change}]        // Bind opacity to animated value
		}}
	  >
		{props.children}
	  </Animated.View>
	);
  }
export const Profile = (props) => {
	const renderItem = ({ item }) => (
		<Wave wave={item} />
	  );
	const [userData, setUserData] = useState("");
	useEffect(() => {
		setUserData(getUserData(props.username))	
	}, []);
	return (
		<View>
			<FadeInView>
				<Image source={require('../assets/wave.png')} style={styles.image}></Image>
			</FadeInView>
			<Avatar.Text size={48} label="SW" />
			<Text style={styles.color}>{userData.username}</Text>
			<Text style={styles.color}>{userData.email}</Text>
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

				
				<FlatList
					data={userData.drops}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
					contentContainerStyle={{alignItems: 'center'}}
				/>
			</DataTable>


			</View>
		
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
				date: '2021-01-16',
				author: 'Simon',
				task: 'Plant something',
				photo:'https://picsum.photos/700',
				id: '4',
				color:'#6BCC6C',
				contributors: 1
			}
		]
	}
};

const getUserDrops = () => {
}

const styles = StyleSheet.create({
	maxWidth:{
		flex:1,
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
		position: "absolute",
		top: 200,
		left: -375
	},
	textArea:{
		backgroundColor: '#1900B5',
	  },
	color: {
		color:'#FFFFFF'
	},
	card: {
		width: 300,
		margin: 10,
	  },
});
