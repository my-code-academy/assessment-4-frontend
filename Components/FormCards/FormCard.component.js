import React, { Component } from 'react';
import {
  TextInput, TouchableOpacity, Text, KeyboardAvoidingView, View, StyleSheet,
} from 'react-native';
import styles from './FormCard.styles';

export default class AllForms extends Component {
  render() {
    const { formName, datetime } = this.props;
    return (
      <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('FormResponse', { navigation: this.props.navigation })}>
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
