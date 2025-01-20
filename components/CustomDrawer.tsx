import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = ( props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View >
        <Image 
                source={require('../assets/user.jpg')}
        />
      </View>

      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer