import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ItemsMainView from './ItemsMainView'

const Tab = createBottomTabNavigator();

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
                { props => <ItemsMainView
                          {...props}
                          title={ this.state.title }
                          onTitleChange={ this.onTitleChange }
                          onSaveTitle={ this.onSaveTitle }
                          isTitleSaved={ this.state.isTitleSaved }
                        />}
                </View>
            </NavigationContainer>
        )
    }
}
