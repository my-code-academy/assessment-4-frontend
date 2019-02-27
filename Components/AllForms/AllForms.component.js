import React, { Component } from 'react';
import {
  TextInput, TouchableOpacity, Text, KeyboardAvoidingView, View, StyleSheet, ScrollView,
} from 'react-native';

export default class AllForms extends Component {
  render() {
    return (
      <ScrollView style={styles.card}>
        <Text style={styles.cardText}>A</Text>
        <Text style={styles.cardText}>B</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'purple',
    width: 300,
    margin: 10,
    minHeight: 100,
    color: 'white',
  },
  cardText: {
    color: 'white',
    fontSize: 40,
    margin: 20,
  },
});
