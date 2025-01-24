import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './screen/Home'
import About from './screen/About'
import Stack from './navigation/Stack'

const App = () => {
  const Drawer=createDrawerNavigator();

  return (
    <NavigationContainer>
       <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Stack}/>
        <Drawer.Screen name="About" component={About}/>
       </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App