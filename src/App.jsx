import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './screen/Home'
import About from './screen/About'
import Stack from './navigation/Stack'
import Contact from './screen/Contact'
import CustomDrawer from './component/CustomDrawer'

const App = () => {
  const Drawer=createDrawerNavigator();

  return (
    <NavigationContainer>
       <Drawer.Navigator
        // initialRouteName='About'
        //  defaultStatus='open'
        //  drawerType='slide'

        drawerContent={(props)=><CustomDrawer {...props}/>}
        >
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="About" component={About}/>
        <Drawer.Screen name="Contact" component={Contact}/>
       </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App