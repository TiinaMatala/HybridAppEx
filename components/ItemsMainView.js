import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

const ItemsMainView = (props) => {


  let output;
  if(props.isTitleSaved)
  {
    output = (
      <View>
        <Text>Hello { props.title }</Text>
      </View>
    );
  }
  else
  {
    output = (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={ { borderWidth: 1, borderColor: 'black', width: '70%', height: 30} }
          placeholder="Title"
          onChangeText={ (value) => { props.onTitleChange(value) }}
          value={ props.title }>
        </TextInput>
        <Button
          title="Save"
          onPress={ props.onSaveTitle }
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Sell</Text>
      <Text>Please enter the info of the item in sale</Text>
      { output }
    </View>

  )
}

export default ItemsMainView
