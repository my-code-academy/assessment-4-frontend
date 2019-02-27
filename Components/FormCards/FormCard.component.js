import React, { Component } from 'react';
import {
  TextInput, TouchableOpacity, Text, KeyboardAvoidingView, View, StyleSheet,
} from 'react-native';

export default class AllForms extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.cardText}>hello World</Text>
        <Text style={styles.cardText}>created At</Text>
      </View>
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
    color: 'white',
    fontSize: 40,
    margin: 20,
  },
});
