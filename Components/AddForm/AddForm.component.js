/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, Button,
} from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import styles from './AddForm.styles';

export default class AllForms extends Component {
  state = {
    formName: '',
    textInput: [],
    formFieldValues: [],
  };

  handleChange = (event) => {
    console.log(event.target);
  }

  addTextInput = (key) => {
    const textInput = this.state.textInput;
    textInput.push(<TextInput
      key={key}
      onChangeText={(text) => {
        // const Player = Object.assign({}, this.state.name, { formName: text, id: key });
        // this.setState({ Player });
        if (this.state.formFieldValues.length < key) {
          this.setState({ formFieldValues: [...this.state.formFieldValues, text] });
        } else {
          const newIds = this.state.formFieldValues.slice();
          newIds[key] = text;
          this.setState({ formFieldValues: newIds });
        }
      }}
      style={styles.formNameInput}
      placeholder="Add Field Name"
    />);
    this.setState({ textInput });
  }

  handleFormSubmit = () => {
    const formFieldValues = this.state.formFieldValues;
    const formFieldsObject = formFieldValues.reduce((o, key) => Object.assign(o, { [key]: '' }), {});
    formFieldsObject.name = this.state.formName;
    const nonNullValues = 0;
    for (let fieldName = 0; fieldName < formFieldValues.length; fieldName++) {
      if (formFieldValues[fieldName] == '' || formFieldValues[fieldName] == null) {
        alert.alert('Please fill all fields');
        return;
      }
    }

    axios.post('http://localhost:7777/add/schema', formFieldsObject).then((res) => {
      this.props.navigation.navigate('AllForms', { navigation: this.props.navigation });
    });


    // console.log(formFieldsObject);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <TextInput
            style={styles.formNameInput}
            placeholder="Form Name"
            onChangeText={text => this.setState({ formName: text })}
          />
          <TouchableOpacity
            style={styles.loginScreenButton}
            underlayColor="#fff"
            onPress={() => this.addTextInput(this.state.textInput.length)}
          >
            <Text style={styles.loginText}>Add Field</Text>
          </TouchableOpacity>
          {this.state.textInput.map((value, index) => value)}
        </ScrollView>
        <TouchableOpacity style={styles.footer} onPress={this.handleFormSubmit}><Text style={styles.footerText}>SAVE</Text></TouchableOpacity>
      </View>
    );
  }
}
