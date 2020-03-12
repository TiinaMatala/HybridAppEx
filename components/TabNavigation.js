import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import ItemsMain from './ItemsMain'
import MainView from './MainView'
import Register from './Register'
import Login from './Login'

const Tab = createBottomTabNavigator();

export default class TabNavigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen
                        name="Home" 
                        component={MainView} 
                        options={{ 
                          tabBarIcon: ({ color, size }) => (
                            <Ionicons name="ios-home" color={color} size={size} />)
                        }} 
                        >
                    </Tab.Screen>
                    <Tab.Screen 
                        name="Register"
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="ios-person-add" color={color} size={size} />)
                        }}
                    >
                       { props => <Register {...props} apiURI={ this.props.apiURI}></Register> }
                    </Tab.Screen>
                    <Tab.Screen
                        name="Login"
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <AntDesign name="login" color={color} size={size} />)
                        }}
                    >
                        { props => <Login {...props} apiURI={ this.props.apiURI}></Login> }
                    </Tab.Screen>
                     <Tab.Screen
                        name="Add item"
                        component={ItemsMain}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="ios-add" color={color} size={size} />)
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}
