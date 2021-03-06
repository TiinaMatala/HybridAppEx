import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Register from './components/Register'
import Login from './components/Login'
import TabNavigation from './components/TabNavigation'


export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
        <TabNavigation apiURI='http://10.4.4.65:3000/users'></TabNavigation>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
