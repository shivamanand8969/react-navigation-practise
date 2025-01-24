import { View, Text, Linking } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import About from '../screen/About'

const CustomDrawer = (props) => {
  return (
   <DrawerContentScrollView {...props}>
    <Text>Custom Drawer</Text>
        <DrawerItemList {...props}
         
        />
        {/* <DrawerItem label={()=><About/>} onPress={()=>Linking.openURL('https://google.com/')}/> */}
   </DrawerContentScrollView>
  )
}

export default CustomDrawer