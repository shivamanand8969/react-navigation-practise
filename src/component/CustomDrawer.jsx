
import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome5';
const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#8200d6' }}>
        <ImageBackground source={{ uri: 'https://w0.peakpx.com/wallpaper/222/995/HD-wallpaper-color-palette-abstract-resolution-abstract-and-background-den.jpg' }} style={{ padding: 20, borderRadius: 10 }}>
          <Image source={{ uri: "https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" }} style={{ height: 80, width: 80, borderRadius: 10, marginBottom: 10 }} />
          <Text style={{ fontSize: 20, color: 'white', fontFamily: 'Roboto-Regular' }}>Shivam Anand</Text>
          <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> 100</Text>
            <Icon name="coins" size={15} color="white" />
          </View>
        </ImageBackground>
        
        <View style={{flex:1,backgroundColor:'white',paddingTop:10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <Text>Our Custom Text</Text>
      </View>
    </View>
  )
}

export default CustomDrawer