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
            drawerActiveBackgroundColor: '#366288',
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
        drawerIcon: ({ size, color }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
        headerTitle: () => (
          <View style={GlobalStyles.headerStyle}>
           <Text style={GlobalStyles.tituloMenu}>PetConnect</Text>
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
      name="refugio/index" 
      options={{
        drawerLabel: 'Refugio',
        title: 'Listado de peliculas',
        drawerIcon: ({ size, color }) => (
          <Ionicons name="paw" size={size} color={color} />
        ),
        headerTitle: () => (
          <View style={GlobalStyles.headerStyle}>
           <Text style={GlobalStyles.tituloHeader}>REFUGIO DE PATITAS</Text>
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
      name="comunidad/index" 
      options={{
        drawerLabel: 'Comunidad',
        title: 'Listado de peliculas',
        drawerIcon: ({ size, color }) => (
          <Ionicons name="people" size={size} color={color} />
        ),
        headerTitle: () => (
          <View style={GlobalStyles.headerStyle}>
           <Text style={GlobalStyles.tituloHeader} adjustsFontSizeToFit={true} minimumFontScale={0.5} >COMUNIDAD ANIMAL</Text>
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
    name="patitasRescate/index" 
    options={{
      drawerLabel: 'Patitas al Rescate',
      title: 'PATITAS AL RESCATE',
      drawerIcon: ({ size, color }) => (
        <Ionicons name="shield" size={size} color={color} />
      ),
      headerTitle: () => (
        <View style={GlobalStyles.headerStyle}>
          <Text style={GlobalStyles.tituloHeader}>PATITAS AL RESCATE</Text>
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
        drawerIcon: ({ size, color }) => (
          <Ionicons name="film" size={size} color={color} />
        ),
        headerTitle: () => (
          <View style={GlobalStyles.headerStyle}>
            <Text style={GlobalStyles.tituloHeader}>PERROS</Text>
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

  </Drawer>

  )
}

export default LayoutDrawer