import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Formik } from 'formik';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ItemsMainView from './ItemsMainView'

//const Tab = createBottomTabNavigator();

export default class AddItems extends Component {
    constructor(props)
  {
    super(props);

    this.state = {
      title: "",
      /*description: "",
      category: "",
      location: "",
      askingPrice: "",
      deliveryTypeShipping: false,
      deliveryTypePickup: false,
      sellerInfoName: "",
      sellerInfoPhone: ""*/
    }

  }

  onTitleChange = newTitle => {
    this.setState({ title: newTitle })
  }

  onSaveTitle = () => {
    this.setState({ isTitleSaved: !this.state.isTitleSaved })
  }

    render() {
        return (
            <NavigationContainer>
                <View>
                
                </View>
            </NavigationContainer>
        )
    }
}
