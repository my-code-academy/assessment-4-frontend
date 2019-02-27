import React, { Component } from 'react';
import {
  TextInput, TouchableOpacity, Text, KeyboardAvoidingView, View, StyleSheet, ScrollView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

export default class FormResponses extends Component {
  state = {
    formData: {},
  }

  componentDidMount() {
    const allFields = axios.get(`http://localhost:7777/form/data/${this.props.formName}`).then((formData) => {
      this.setState({ formData: formData.data });
      console.log(this.props.formData);
    });
  }

  render() {
    return (
      <ScrollView>
        <Text>fmkf</Text>
      </ScrollView>
    );
  }
}
