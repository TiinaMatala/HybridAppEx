import React from 'react'
import {View,
        Text,
        Button,
        TextInput,
        StyleSheet
} from 'react-native'


export default class Register extends React.Component {

state = {
    email: '', 
    password: '', 
  
}

onChangeText = (key, val) => {
    this.setState({ [key]: val })

}
Register = async () => {
   const { password, email } = this.state;
  
   axios({
   method:'post', 
   url:targetURI ,
   data: { email, password },
   headers: { 
      "Content-type": "application/json"}
   
   })
 
try {
  console.log('user successfully signed up!: ', success)
} catch (err) {
   console.log('error signing up: ', err)

}

}

render() {

   return (

      <View style={styles.container}> 
      <Text>REGISTER</Text>
       <Text>Please enter your email</Text>
          <TextInput style={styles.input}
             placeholder='Email'
             autoCapitalize="none"
             placeholderTextColor='white'
             onChangeText={val => this.onChangeText('email', val)}

          />
          <Text>Please enter your password</Text>
          <TextInput style={styles.input}
             placeholder='Password'
             secureTextEntry={true}
             autoCapitalize="none"
             placeholderTextColor='white'
             onChangeText={val => this.onChangeText('password', val)}

           />


           <Button
            title='Sign Up'
            onPress={this.Register}

            />

</View>

)}


} 
const styles = StyleSheet.create({

   container: {
       flex: 1,
       backgroundColor: 'grey', 
       alignItems: 'center',
       justifyContent: 'center',

   },

   input: {

      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      fontSize: 18,
      borderRadius: 6,

  },

 });

