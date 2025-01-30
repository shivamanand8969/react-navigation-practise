import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screen/Home';
import About from '../screen/About';
import CustomBottomTab from '../component/CustomBottomTab';

let Tab=createBottomTabNavigator();
const BottomTab = () => {

  return (
    <Tab.Navigator tabBar={props=><CustomBottomTab {...props}/>} screenOptions={{headerShown:false}}>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name="About" component={About}/>
    </Tab.Navigator>
  )
}

export default BottomTab