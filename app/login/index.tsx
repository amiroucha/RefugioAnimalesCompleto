import { View, Text, TextInput, Image, Pressable } from 'react-native';
import React from 'react'
import { GlobalStyles } from '../../theme/GlobalStyles';
import { Boton } from '../components/Boton';
import { router } from "expo-router";


const login = () => {
  return (
    <View style = {[GlobalStyles.contenedor]}>
      <View style={{height:100, width:'100%' , position:'absolute', top:13}}>
        <Image 
          source={require("../../assets/images/logo_2.png")}
          style={{width: 60, height:60, position:'relative', left:'77%'}}
        ></Image>
      </View>

      <Text style={GlobalStyles.tituloLogin}>Bienvenido a </Text>
      <Text style={GlobalStyles.PetConnect}>PetConnect</Text>

      <View style={GlobalStyles.fondoBlancoLog}>
        <View style={{marginLeft:20, marginRight:20}}>
        <Image 
          source={require("../../assets/images/perroGatoJuntos.png")}
          style={GlobalStyles.perroGato}
        ></Image>

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
          <View style={{display:'flex',flexDirection: 'row', justifyContent:'space-between', width:'100%'}}>
          <Pressable onPress={()=>{router.push('../signUp')}}>
                <Text style={GlobalStyles.textRegistrar}>Regístrate aquí</Text>
            </Pressable>

            <Boton label='Acceder' backgroundColor='naranja' link='../menu'></Boton>
          </View>


        </View>
        </View>

      </View>

      <Text style ={GlobalStyles.olvidarContra}>¿Olvidaste la contraseña?</Text>
    </View>

  )
}

export default login