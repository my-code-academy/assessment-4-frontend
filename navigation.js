import {
  createAppContainer, createStackNavigator, StackActions, NavigationActions,
} from 'react-navigation';

import AllForms from './Components/AllForms/AllForms.component';
import AddFormComponent from './Components/AddForm/AddForm.component';
import FormResponseComponent from './Components/FormResponse/FormResponse.component';

const AppNavigator = createStackNavigator({
  AllForms: {
    screen: AllForms,
    // navigationOptions: {
    //   header: null,
    // },
  },
  AddForm: {
    screen: AddFormComponent,
  },
  FormResponse: {
    screen: FormResponseComponent,
  },
}, {
  initialRouteName: 'AllForms',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'purple',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default createAppContainer(AppNavigator);
