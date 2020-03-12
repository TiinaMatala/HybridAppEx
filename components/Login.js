import React, { useState } from 'react'
import {View,
        Text,
        Button,
        TextInput,
        StyleSheet,
        TouchableHighlight
} from 'react-native'
import axios from 'axios'
import { Base64 } from 'js-base64'

const apiURI='http://10.4.4.65:3000/users'



const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    
  function loginClick() {
        fetch (props.apiURI + '/login', {
            method: 'GET',
            headers: {
              "Authorization": "Basic " + Base64.encode(email + ":" + password)
            }
          })
          .then(response => {
            if (response.ok == false) {
              throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
            }
            return response.json();
          })
          
          .then(json => {
            console.log("Login successful")
            console.log("Received following JSON");
            console.log(json);
      
          })
          .catch(error => {
            console.log("Error message:")
            console.log(error.message)
          });
          
        }
      
       return (

            <View style={styles.container}> 
            <Text>LOGIN</Text>
             <Text style={styles.text}>Please enter your email</Text>
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
      
                 <TouchableHighlight onPress={ () => loginClick() }>
                <View style={ styles.primaryButton }>
                 <Text style={ styles.primaryButtonText }>Login</Text>
                </View>
               </TouchableHighlight>
          </View>
      
      )}
      
      const styles = StyleSheet.create({
      
         container: {
             flex: 1,
             backgroundColor: 'white', 
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
        text: {
          margin: 30 ,

        },
      
       });

       export default Login ;
