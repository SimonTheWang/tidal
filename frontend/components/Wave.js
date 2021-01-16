import React from 'react';
import {
   Button, Card, Title, Paragraph
} from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const Wave = (props) => {
  return (
    
    <Card style={styles.card}>
      <Card.Cover source={{ uri: props.wave.photo }}/>
      <Card.Content style={{ backgroundColor: props.wave.color}}>
        <Title style={styles.color}>{`${props.wave.task} - ${props.wave.author}`}</Title>
        <Paragraph style={styles.color}>{props.wave.date + "                       contributors: "+ props.wave.contributors}</Paragraph>
      </Card.Content>

    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    position:'relative',
    width: 300,
    margin: 10
  },
  textArea:{
    backgroundColor: '#1900B5',
    fontFamily: 'Montserrat'
  },
  color:{
    color: 'white',
    fontFamily: 'Montserrat'
  }
});
