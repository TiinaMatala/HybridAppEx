import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Register from './components/Register'
import Login from './components/Login'

export default function App() {
  return (
    <View style={styles.container}>
    <Register  apiURI='http://10.4.4.65:3000/users'></Register>
    <Login apiURI='http://10.4.4.65:3000/users'></Login>
    
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
