import React, { useState } from 'react'
import {View,
        Text,
        Button,
        TextInput,
        StyleSheet,
        TouchableHighlight
} from 'react-native'
import axios from 'axios'

 
const Register = (props) => {

   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");


   
function register()
{
  fetch(props.apiURI + '/register', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => {
      if (response.ok == false) {
        throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
      }
      return response.json();
    })
    
    .catch(error => {
      console.log("Error message:")
      console.log(error.message)
    });

   }

   return (

      <View style={styles.container}> 
      <Text style={styles.text}>REGISTER</Text>
       <Text>Please enter your email</Text>
          <TextInput style={styles.input}
             placeholder='Email'
             autoCapitalize="none"
             placeholderTextColor='white'
             onChangeText={ value => setEmail(value)}

          />
          <Text style={styles.text}>Please enter your password</Text>
          <TextInput style={styles.input}
             placeholder='Password'
             secureTextEntry={true}
             autoCapitalize="none"
             placeholderTextColor='white'
             onChangeText={ value => setPassword(value)}

           />

<TouchableHighlight onPress={ () => register() }>
        <View style={ styles.primaryButton }>
          <Text style={ styles.primaryButtonText }>Sign up</Text>
        </View>
      </TouchableHighlight>

</View>

)}
   
   
const styles = StyleSheet.create({

   text: {
      margin: 30
   },

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


 export default Register ;
