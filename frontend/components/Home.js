import React from 'react';
import {
  SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar
} from 'react-native';
import { Wave } from './Wave';

const DATA = [
  {
    date: '2021-01-09',
    author: 'John Doe',
    task: 'planted a tree',
    id: '1'
  },
  {
    date: '2021-01-04',
    author: 'John Doe',
    task: 'cleaned a park',
    id: '2'
  },
  {
    date: '2021-01-03',
    author: 'John Doe',
    task: 'told someone they loved them',
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
