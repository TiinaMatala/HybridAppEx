import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, TextInput, Keyboard, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Formik } from 'formik'
import * as ImagePicker from 'expo-image-picker'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'

const targetURI='http://192.168.1.103:3000/items'

export default class ItemsMain extends Component {
   constructor(props) {
      super(props);
      this.state = {
            imagesaved: null,
            fileNameSaved: null
         }

   }
   openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }
  
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      console.log(pickerResult);
  
      if(pickerResult.cancelled == true)
      {
        alert('Image picker cancelled or failed');
        return;
      }
      this.setState({imagesaved: pickerResult.uri}) 
      const fileNameSplit = pickerResult.uri.split('/');
      const fileName = fileNameSplit[fileNameSplit.length - 1];
      this.setState({fileNameSaved: fileName})
     }
   render() {   
          return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
             <ScrollView>
              <View style={styles.container}>
                  <Formik
                    initialValues={{
                        title: '',
                        description: '',
                        category: '',
                        location: '',
                        askingPrice: '',
                        deliveryTypeShipping: '',
                        deliveryTypePickup: '',
                        sellerInfoName: '',
                        sellerInfoPhone: ''
                    }}
                    onSubmit={(values, actions) => {
                     let postForm = new FormData();
                     postForm.append('images', {
                       uri: this.state.imagesaved,
                       name: this.state.fileNameSaved,
                       type: 'image/jpeg'
                     });
                     postForm.append('title', values.title)
                     postForm.append('description', values.description)
                     postForm.append('category', values.category)
                     postForm.append('location', values.location)
                     postForm.append('askingPrice', values.askingPrice)
                     postForm.append('deliveryTypeShipping', values.deliveryTypeShipping)
                     postForm.append('deliveryTypePickup', values.deliveryTypePickup)
                     postForm.append('sellerInfoName', values.sellerInfoName)
                     postForm.append('sellerInfoPhone', values.sellerInfoPhone)
               
                     axios({
                        method: 'post',
                        url: targetURI,
                        data: postForm,
                        headers: { 'Content-Type': 'multipart/form-data' }
                        })
                        .then(function (response) {
                            //handle success
                            console.log(response);
                        })
                      .catch(err => console.log(err));
                      actions.resetForm();
                    }}
                  >
                    {(props) => (
                       <View>
                          <Text style={ styles.introduction}>Please type in the information of the item on sale</Text>
                          <Text>Title</Text>
                          <TextInput 
                             style={styles.input}
                             onChangeText={props.handleChange('title')}
                             value={props.values.title}
                          />
      
                          <Text>Description</Text>
                          <TextInput
                             multiline 
                             style={styles.input}
                             onChangeText={props.handleChange('description')}
                             value={props.values.description}
                          />
      
                          <Text>Category</Text>
                          <TextInput 
                             style={styles.input}
                             onChangeText={props.handleChange('category')}
                             value={props.values.category}
                          />
      
                          <Text>Location</Text>
                          <TextInput 
                             style={styles.input}
                             onChangeText={props.handleChange('location')}
                             value={props.values.location}
                          />
      
                          <Text>Asking price</Text>
                          <TextInput 
                             style={styles.input}
                             onChangeText={props.handleChange('askingPrice')}
                             value={props.values.askingPrice}
                             keyboardType='numeric'
                          />
      
                           <Text>Delivery type shipping</Text>
                           <TextInput
                             style={styles.input}
                             placeholder='true or false'
                             onChangeText={props.handleChange('deliveryTypeShipping')}
                             value={props.values.deliveryTypeShipping}
                           />
      
                           <Text>Delivery type pickup</Text>
                           <TextInput
                             style={styles.input}
                             placeholder='true or false'
                             onChangeText={props.handleChange('deliveryTypePickup')}
                             value={props.values.deliveryTypePickup}
                           />
      
                          <Text>Seller name</Text>
                          <TextInput 
                             style={styles.input}
                             onChangeText={props.handleChange('sellerInfoName')}
                             value={props.values.sellerInfoName}
                          />
                          
                          <Text>Seller phone</Text>
                          <TextInput 
                             style={styles.input}
                             onChangeText={props.handleChange('sellerInfoPhone')}
                             value={props.values.sellerInfoPhone}
                             keyboardType='numeric'
                             onSubmit={Keyboard.dismiss}
                          />
      
                           <Text>Photos</Text>
                              <TouchableOpacity onPress={() => this.openImagePickerAsync()} style={{ borderWidth: 1, borderColor: 'black' }}>
                                 <Text>Pick a photo</Text>
                              </TouchableOpacity>
      
                          <Button title='submit' color='#483D8B' onPress={props.handleSubmit} />
      
                       </View>   
                    )}
                  </Formik>
              </View>
            </ScrollView>
         </TouchableWithoutFeedback>
      
      )
   }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
    introduction: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 60,
      fontSize: 20,
    }
  });