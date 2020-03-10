import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ItemsMain from './components/ItemsMain'

//const Stack = createStackNavigator();

export default function App() {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={ styles.introduction}>Please type in the information of the item on sale</Text>
        <ItemsMain />
      </View>
    </TouchableWithoutFeedback>
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
    marginTop: 60,
    fontSize: 20,
  }
});
