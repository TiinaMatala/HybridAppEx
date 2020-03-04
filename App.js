import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import AddItems from './components/AddItems';
import ItemsMain from './components/ItemsMain'

//const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={ styles.introduction}>Please type in the information of the sold item</Text>
      <ItemsMain />
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
  introduction: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  }
});
