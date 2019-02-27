import React, { Component } from 'react';
import {
  TextInput, TouchableOpacity, Text, KeyboardAvoidingView, View, StyleSheet,
} from 'react-native';

export default class AllForms extends Component {
  render() {
    const { formName, datetime } = this.props;
    return (
      <TouchableOpacity style={styles.card} onPress={() => console.log('hhh')}>
        <Text style={styles.cardText}>{formName}</Text>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />
        <Text style={styles.datetime}>
          created At:
          {' '}
          {datetime}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    backgroundColor: 'white',
    width: 300,
    margin: 10,
    // minHeight: 100,
    color: 'black',
  },
  cardText: {
    color: 'black',
    fontSize: 20,
    margin: 20,
  },
  datetime: {
    color: 'black',
    fontSize: 10,
    margin: 10,
    textAlign: 'right',
    alignSelf: 'stretch',
  },
});
