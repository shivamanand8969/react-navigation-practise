import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const CreatePost = ({navigation}) => {
    const [name,setName]=useState();
  return (
    <View>
      <Text>CreatePost</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder='Enter your name you  want to pass to previous screen'
        multiline
      />
      <Button title='submit' onPress={()=>{navigation.popTo('Home',{name:name})}}/>
    </View>
  )
}

export default CreatePost