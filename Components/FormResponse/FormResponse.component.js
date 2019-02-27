import * as React from 'react';
import {
  View, StyleSheet, Dimensions, Text,
} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import FillForm from '../FillForm/FillForm.component';

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Fill Form' },
      { key: 'second', title: 'Responses' },
    ],
  };

   FirstRoute = () => (
     <FillForm navigation={this.props.navigation} formName={this.props.navigation.state.params.formName} />
   );

   SecondRoute = () => (
     <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
       <Text />
     </View>
   );

   render() {
     console.log('render', this.props);
     return (
       <TabView
         navigationState={this.state}
         renderScene={SceneMap({
           first: this.FirstRoute,
           second: this.SecondRoute,
         })}
         onIndexChange={index => this.setState({ index })}
         initialLayout={{ width: Dimensions.get('window').width }}
       />
     );
   }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
