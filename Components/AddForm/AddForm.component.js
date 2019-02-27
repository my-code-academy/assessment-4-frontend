/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, Button,
} from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

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
    // axios.post('')
    console.log(formFieldsObject);
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

const styles = StyleSheet.create({
  footerText: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
  },
  footer: {
    backgroundColor: 'purple',
    width: 400,
    height: 50,
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  formNameInput: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    // borderWidth: 1,
    borderBottomWidth: 1,
    margin: 20,
  },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'purple',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 20,
  },
});
