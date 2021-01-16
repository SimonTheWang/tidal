import React from 'react';
import {
  SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar
} from 'react-native';
import { Wave } from './Wave';

const DATA = [
  {
    date: '2021-01-16',
    author: 'Mackenzie',
    task: 'Let someone know you appreciate them',
    photo:'https://picsum.photos/700',
    id: '1'
  },
  {
    date: '2021-01-15',
    author: 'Freddie',
    task: 'Clean a public area',
    photo:'https://image.freepik.com/free-photo/woman-volunteer-cleaning-up-trash-park-picking-up-garbage-outdoors_106029-69.jpg',
    id: '2'
  },
  {
    date: '2021-01-16',
    author: 'Simon',
    task: 'Plant something',
    photo:'https://picsum.photos/700',
    id: '3'
  },
];

export const Home = () => {
  const renderItem = ({ item }) => (
    <Wave wave={item} />
  );

  return (
    <SafeAreaView style={styles.maxWidth}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{alignItems: 'center'}}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
	maxWidth: {
    width:'100%',
	},
});
