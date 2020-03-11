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
                        name="Main" 
                        component={MainView} 
                        options={{ 
                          tabBarIcon: ({ color, size }) => (
                            <Ionicons name="ios-home" color={color} size={size} />)
                        }}
                    />
                    <Tab.Screen 
                        name="Register"
                        component={Register}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="ios-person-add" color={color} size={size} />)
                        }}
                    />
                    <Tab.Screen
                        name="Login"
                        component={Login}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <AntDesign name="login" color={color} size={size} />)
                        }}
                    />
                     <Tab.Screen
                        name="Add"
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
