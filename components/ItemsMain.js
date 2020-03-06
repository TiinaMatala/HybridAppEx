import React from 'react'
import { Text, View, Button, StyleSheet, TextInput, Keyboard, Picker } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Formik } from 'formik';
import * as ImagePicker from 'expo-image-picker'
import { ScrollView } from 'react-native-gesture-handler';

export default function ItemsMain() {

    return(
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
                actions.resetForm();
                console.log(values);
              }}
            >
              {(props) => (
                 <View>
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
                       onChangeText={props.handleChange('deliveryTypeShipping')}
                       value={props.values.deliveryTypeShipping}
                     />

                     <Text>delivery type pickup</Text>
                     <TextInput
                       style={styles.input}
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

                    <Button title='submit' color='#483D8B' onPress={props.handleSubmit} />

                 </View>   
              )}
            </Formik>
        </View>
        </ScrollView>
    )
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
    }
  });