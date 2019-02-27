import React, { Component } from 'react';
import {
  TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Image, ScrollView, StyleSheet, View,
} from 'react-native';
import axios from 'axios';
import FormCard from '../FormCards/FormCard.component';

export default class AllForms extends Component {
  state = {
    allFormsData: [],
  }

  componentDidMount() {
    const allForms = axios.get('http://localhost:7777/forms/names').then((formsNames) => {
      this.setState({ allFormsData: formsNames.data });
    });
  }

  render() {
    const { allFormsData } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.allCards}>
        <View>
          {
            allFormsData.map(formData => (
              <TouchableOpacity>
                <FormCard formName={formData.name} datetime={formData.date} />
              </TouchableOpacity>
            ))
          }
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  allCards: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#D8E4F0',
    // height: 800,
  },
});
