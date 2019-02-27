import {
  createAppContainer, createStackNavigator, StackActions, NavigationActions,
} from 'react-navigation';

import AllForms from './Components/AllForms/AllForms.component';

const AppNavigator = createStackNavigator({
  AllForms: {
    screen: AllForms,
    // navigationOptions: {
    //   header: null,
    // },
  },
  // AssessmentPage: {
  //   screen: AllAssessmentsContainer,
  // navigationOptions: {
  //   header: null,
  // },
  // },
}, {
  initialRouteName: 'AllForms',
});

export default createAppContainer(AppNavigator);
