import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './screen/Home'
import About from './screen/About'
import Stack from './navigation/Stack'
import Contact from './screen/Contact'
import CustomDrawer from './component/CustomDrawer'
import ProfileScreen from './screen/ProfileScreen'
import Icon from 'react-native-vector-icons/AntDesign';
import BottomTab from './navigation/BottomTab'

const Drawer=createDrawerNavigator();
const App = () => {

  return (
    <NavigationContainer>
       <Drawer.Navigator
        drawerContent={(props)=><CustomDrawer {...props}/>}
        >
        <Drawer.Screen name="Home" component={BottomTab} 
          options={{
            drawerIcon:({focused,size})=>(
              <Icon name='home' size={size} color={focused?'blue':'black'}/>
            )
          }}
        />
        <Drawer.Screen name="About" component={About}
          options={{
            drawerIcon:({focused,size})=>(
              <Icon name='infocirlceo' size={size} color={focused?'blue':'black'}/>
            )
          }}
        />
        <Drawer.Screen name="Contact" component={Contact}
          options={{
            drawerIcon:({focused,size})=>(
              <Icon name='contacts' size={20} color={focused? 'blue':'black'}/>
            )
          }}
        />
        <Drawer.Screen name="Profile" component={ProfileScreen}
          options={{
            drawerIcon:({focused,size})=>(
              <Icon name='profile' size={size} color={focused? 'blue':'black'}/>
            )
          }}
        />
       </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App