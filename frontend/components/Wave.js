import React from 'react';
import {
   Button, Card, Title, Paragraph
} from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const Wave = (props) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{`${props.wave.task}, started by ${props.wave.author}`}</Title>
        <Paragraph>{props.wave.date}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button>Keep it going!</Button>
      </Card.Actions>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    width: '90%',
    margin: 10
  },
});
