import { View, Text } from 'react-native'
import React from 'react'
import Home from '../screen/Home';
import About from '../screen/About';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = () => {
    let Stack=createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          headerTitle:"shivam",
          headerStyle:{
            backgroundColor:'red'
          },
          headerTintColor:'white'
        }}/>
        <Stack.Screen 
        presentation="modal"
         options={{
          // cardStyle:{
          //   backgroundColor:'transparent'
          // }
          // presentation:'modal'
          headerShown:false,
          presentation:'transparentModal'

         }}
        name="About" component={About}/>
      </Stack.Navigator>
  )
}

export default Stack
