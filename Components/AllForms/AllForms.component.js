import React, { Component } from 'react';
import {
  TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Image, ScrollView, StyleSheet, View, Alert,
} from 'react-native';
import axios from 'axios';
import FormCard from '../FormCards/FormCard.component';
import styles from './AllForms.styles';

export default class AllForms extends Component {
  state = {
    allFormsData: [],
  }

  componentDidMount() {
    const allForms = axios.get('http://localhost:7777/forms/names').then((formsNames) => {
      this.setState({ allFormsData: formsNames.data });
    });
  }

  clickHandler = () => {
    this.props.navigation.navigate('AddForm', { navigation: this.props.navigation });
  };

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
        <View style={styles.MainContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.clickHandler}
            style={styles.TouchableOpacityStyle}
          >
            <Image
              source={{
                uri: 'http://aboutreact.com/wp-content/uploads/2018/08/bc72de57b000a7037294b53d34c2cbd1.png',
              }}
              style={styles.FloatingButtonStyle}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
