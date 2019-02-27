import { StyleSheet } from 'react-native';

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

export default styles;
