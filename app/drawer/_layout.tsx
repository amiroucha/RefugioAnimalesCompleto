import { GlobalStyles } from "@/theme/GlobalStyles"
import { Colors } from "@/theme/Colors";
import { Drawer } from 'expo-router/drawer';
import { Ionicons} from '@expo/vector-icons'
import React from 'react';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { View, Text, Image } from 'react-native';
import CustomDrawer from '@/components/CustomDrawer';

const LayoutDrawer = () => {
  return (
    <Drawer 
        drawerContent={CustomDrawer}
        screenOptions={{
            overlayColor: 'rgba(0,0,0,0.4)',
            drawerInactiveTintColor: 'black',
            drawerActiveBackgroundColor: 'indigo',
            drawerActiveTintColor: 'white',
            drawerItemStyle: {
                borderRadius: 10
            },
        }}>

    
    <Drawer.Screen
      name="index" 
      options={{
        drawerLabel: 'Inicio',
        title: 'Pantalla inicio',
        drawerIcon: ({size, color}) => <Ionicons name="home" size={size} color={color}/>
      }}
    />
    
    <Drawer.Screen
      name="refugio/index" 
      options={{
        drawerLabel: 'Refugio',
        title: 'Listado de peliculas',
        drawerIcon: ({size, color}) => <Ionicons name="film" size={size} color={color}/>
      }}
    />

    <Drawer.Screen
      name="comunidad/index" 
      options={{
        drawerLabel: 'Comunidad',
        title: 'Listado de peliculas',
        drawerIcon: ({size, color}) => <Ionicons name="film" size={size} color={color}/>
      }}
    />

  <Drawer.Screen
    name="patitasRescate/index" 
    options={{
      drawerLabel: 'Patitas al Rescate',
      title: 'PATITAS AL RESCATE',
      drawerIcon: ({ size, color }) => (
        <Ionicons name="film" size={size} color={color} />
      ),
      headerTitle: () => (
        <View style={{ display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', width:'100%'}}>
          <Text style={GlobalStyles.titulocomunidad}>PATITAS AL RESCATE</Text>
          <Image source={require('../../assets/images/logo_2.png')} style={{ width: RFValue(35), height:RFValue(35)}}/>
        </View>
      ),
      headerStyle: {
        backgroundColor: Colors.blueDark,
        height: RFValue(50),
        
      },
      headerTintColor: Colors.white,
      
    }}
  />

    <Drawer.Screen
      name="refugio/perros/index" 
      options={{
        drawerLabel: 'Perros',
        title: 'Listado de peliculas',
        drawerIcon: ({size, color}) => <Ionicons name="film" size={size} color={color}/>
      }}
    />

  </Drawer>

  )
}

export default LayoutDrawer