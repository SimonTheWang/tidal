import React from 'react';
import {
   Button, Card, Title, Paragraph
} from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const Wave = (props) => {
  return (
    
    <Card style={styles.card}>
    <Card.Cover source={{ uri: props.wave.photo }}/>
      <Card.Content>
        <Title>{`${props.wave.task} - ${props.wave.author}`}</Title>
        <Paragraph>{props.wave.date + "                     contributors: "+ props.wave.contributors}</Paragraph>
      </Card.Content>
      
    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    width: 300,
    margin: 10
  },
});
