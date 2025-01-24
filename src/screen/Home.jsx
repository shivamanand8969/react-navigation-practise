import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({route,navigation}) => {
  let params=route.params;
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Hellow :  {params?.name}</Text>
      <Text>Hey, this is shivam anand</Text>
      <Button title="Go to About" onPress={()=>navigation.navigate('About',{name:'shivam anand',age:'20'})}/>

    </View>
  )
}

export default Home