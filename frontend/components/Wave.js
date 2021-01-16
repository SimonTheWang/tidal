import React from 'react';
import { Card, Title, Paragraph
} from 'react-native-paper';
import { StyleSheet} from 'react-native';

export const Wave = (props) => {
    function handleClick() {
      props.onChildClick(props.wave)
    }
  return (
      <Card onPress={handleClick} style={styles.card}>
        <Card.Cover source={{ uri: props.wave.photo }}/>
        <Card.Content style={{ backgroundColor: props.wave.color}}>
          <Title style={styles.color}>{"Started by: " + props.wave.author}</Title>
          <Title style={styles.color}>{"Task: " + props.wave.task}</Title>
          <Paragraph style={styles.color}>{props.wave.date + "                       Contributors: "+ props.wave.contributors}</Paragraph>
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
    //fontFamily: 'Montserrat',
  },
  color:{
    color: 'white',
    //fontFamily: 'Montserrat'
  }
});
