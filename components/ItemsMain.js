import React from 'react'
import { Text, View, Button, StyleSheet, TextInput, Keyboard } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Formik } from 'formik';

export default function ItemsMain() {

    return(
        <View style={styles.container}>
            <Formik
              initialValues={{
                  title: '',
                  description: '',
                  category: '',
                  location: '',
                  askingPrice: '',
                  deliveryTypeShipping: false,
                  deliveryTypePickup: false,
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
                    <TextInput 
                       style={styles.input}
                       placeholder='Item title'
                       onChangeText={props.handleChange('title')}
                       value={props.values.title}
                    />

                    <TextInput
                       multiline 
                       style={styles.input}
                       placeholder='Item description'
                       onChangeText={props.handleChange('description')}
                       value={props.values.description}
                    />

                    <TextInput 
                       style={styles.input}
                       placeholder='Item category'
                       onChangeText={props.handleChange('category')}
                       value={props.values.category}
                    />

                    <TextInput 
                       style={styles.input}
                       placeholder='Item location'
                       onChangeText={props.handleChange('location')}
                       value={props.values.location}
                    />

                    <TextInput 
                       style={styles.input}
                       placeholder='Asking price'
                       onChangeText={props.handleChange('askingPrice')}
                       value={props.values.askingPrice}
                       keyboardType='numeric'
                    />

                    <TextInput 
                       style={styles.input}
                       placeholder='Deliverytype shipping'
                       onChangeText={props.handleChange('deliveryTypeShipping')}
                       value={props.values.deliveryTypeShipping}
                    />

                    <TextInput 
                       style={styles.input}
                       placeholder='Deliverytype pickup'
                       onChangeText={props.handleChange('deliveryTypePickup')}
                       value={props.values.deliveryTypePickup}
                    />

                    <TextInput 
                       style={styles.input}
                       placeholder='Seller name'
                       onChangeText={props.handleChange('sellerInfoName')}
                       value={props.values.sellerInfoName}
                    />
                    
                    <TextInput 
                       style={styles.input}
                       placeholder='Seller phone number'
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