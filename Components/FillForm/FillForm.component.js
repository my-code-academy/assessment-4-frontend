import React, { Component } from 'react';
import {
  TextInput, TouchableOpacity, Text, KeyboardAvoidingView, View, StyleSheet,
} from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

export default class FillForm extends Component {
  state = {
    fieldNames: [],
    formResponses: {},
  }

  componentDidMount() {
    const allFields = axios.get(`http://localhost:7777/form/${this.props.formName}`).then((fieldNames) => {
      this.setState({ fieldNames: fieldNames.data });
      console.log(this.props.formName);
    });
  }

  handleFormSubmit = () => {
    const formResponses = this.state.formResponses;
    formResponses.name = this.props.formName;
    formResponses.responseID = String(new Date().toString());
    axios.post('http://localhost:7777/add', formResponses).then((res) => {
      console.log(this.props);
      this.props.navigation.navigate('AllForms', { navigation: this.props.navigation });
    });
  }

  render() {
    const { fieldNames } = this.state;
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          {
          fieldNames.map(fieldname => (
            <TextInput
              onChangeText={(text) => {
                const field = Object.assign({}, this.state.formResponses);
                field[fieldname] = text;
                this.setState({ formResponses: field });
                console.log(this.state.formResponses);
              }}
              style={styles.formNameInput}
              placeholder={fieldname}
            />
          ))
        }

        </ScrollView>
        <TouchableOpacity style={styles.footer} onPress={this.handleFormSubmit}>
          <Text style={styles.footerText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});
