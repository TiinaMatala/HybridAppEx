import React from 'react'
import {View,
        Text,
        Button,
        TextInput,
        StyleSheet,
        TouchableHighlight
} from 'react-native'



const Login = (props) => {
    


      
        function loginClick() {
        axios (props.apiURI + '/loginForJWT', {
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
      
            props.onLoginReceiveJWT(json.token);
          })
          
        }
      




        return (

            <View style={styles.container}> 
            <Text>LOGIN</Text>
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

       export default Login ;
