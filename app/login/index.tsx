import { View, Text, TextInput, Image, Pressable } from 'react-native';
import React from 'react'
import { GlobalStyles } from '../../theme/GlobalStyles';
import { Boton } from '../../components/Boton';
import { router } from "expo-router";


const login = () => {
  return (
    <View style = {[GlobalStyles.contenedor, GlobalStyles.box]}>
      <View style={{height:100, width:'100%' , position:'absolute', top:13,alignItems:'flex-end'}}>
        <Image 
          source={require("../../assets/images/logo_2.png")}
          style={{width: 60, height:60, marginRight:20}}
        ></Image>
      </View>

      <View style={{position:'relative', top:-10}}>
        <Text style={GlobalStyles.tituloLogin}>Bienvenido a </Text>
        <Text style={GlobalStyles.PetConnect}>PetConnect</Text>
      </View>
      


      <View style={GlobalStyles.fondoBlancoLog}>
        <View style={{marginLeft:20, marginRight:20}}>
          <Image 
            source={require("../../assets/images/perroGatoJuntos.png")}
            style={GlobalStyles.perroGato}>
          </Image>

          <View style={{display:'flex',flexDirection: 'column', flexWrap: 'wrap', bottom:50, alignItems:'center'}}>

            <Image 
              source={require("../../assets/images/huellaNaranja.png")}
              style={GlobalStyles.pataArriba}></Image>
            <Text style= {GlobalStyles.textoAccede}>Accede al refugio</Text>
            <Image 
              source={require("../../assets/images/huellaNaranja.png")}
              style={GlobalStyles.pataAbajo}></Image>
              
            <TextInput
              style={GlobalStyles.input}
              placeholder="Email"/>

            <TextInput
              style={GlobalStyles.input}
              placeholder="Contraseña"/>

            <View style={{display:'flex',flexDirection: 'row', justifyContent:'space-between', width:'100%', alignItems:'center'}}>
              <Pressable onPress={()=>{router.push('../signUp')}}>
                    <Text style={[GlobalStyles.textRegistrar]}>Regístrate aquí</Text>
              </Pressable>

              <Boton label='Acceder' backgroundColor='naranja' link='../drawer'></Boton>
            </View>

          </View>
        </View>

      </View>
      <View>
        <Text style ={GlobalStyles.olvidarContra}>¿Olvidaste la contraseña?</Text>
      </View>
      
    </View>

  )
}

export default login