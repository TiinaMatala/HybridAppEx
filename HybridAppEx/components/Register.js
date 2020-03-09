import React from 'react'

import {View,Button,TextInput,StyleSheet} from 'react-native'



export default class Register extends React.Component {

  state = {
   username: '', 
   password: '', 
   email: '', 
   

  }
onChangeText = (key, val) => {
   this.setState({ [key]: val })

  }

  Register = async () => {
    const { password, email } = this.state
    try {
       console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)

    }

  }

 

  render() {
    return (
       <View style={styles.container}>
        <TextInput
           style={styles.input}
           placeholder='Username'
           autoCapitalize="none"
           placeholderTextColor='white'
           onChangeText={val => this.onChangeText('username', val)}

        />

        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}

        />

       <Button
         title='Sign Up'
         onPress={this.signUp}
        />

      </View>

    )

  }

}