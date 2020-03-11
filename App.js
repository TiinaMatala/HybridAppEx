import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Register from './components/Register'
import Login from './components/Login'

//const Stack = createStackNavigator();
const targetURI='http://10.4.4.87:3000/users'

export default function App() {
  return (
    <View style={styles.container}>
    <Register/>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
