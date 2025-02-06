import { View, Text, TextInput, Pressable, Image, ScrollView } from 'react-native';
import { GlobalStyles } from '../../theme/GlobalStyles';
import Boton from '../../components/Boton';
import { router } from "expo-router";

const signUp = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={[GlobalStyles.contenedorRegistro, GlobalStyles.box]}>
        <View style={{height: 100, width: '100%', position: 'absolute', top: 13}}>
          <Image 
            source={require("../../assets/images/logo_2.png")}
            style={{width: 60, height: 60, position: 'relative', left: '77%'}}
          />
        </View>

        <Text style={GlobalStyles.tituloRegistro}>Regístrate en</Text>
        <Text style={GlobalStyles.PetConnectRegistro}>PetConnect</Text>
        <Image 
          source={require("../../assets/images/perroGatoJuntos.png")}
          style={GlobalStyles.perroGatoReg}
        />

        <View style={GlobalStyles.contenedorGrisOscuro}>
          <View style={{margin: 20}}>
            <Image 
              source={require("../../assets/images/huellaBlanca.png")}
              style={GlobalStyles.pataArriba}
            />
            <Text style={GlobalStyles.textoUnirse}>¡Hazte parte del refugio!</Text>
            <Image 
              source={require("../../assets/images/huellaBlanca.png")}
              style={GlobalStyles.pataAbajo}
            />

            <TextInput
              style={GlobalStyles.input}
              placeholder="Nombre"
            />
            <TextInput
              style={GlobalStyles.input}
              placeholder="Email"
            />
            <TextInput
              style={GlobalStyles.input}
              placeholder="Contraseña"
              secureTextEntry={true}
            />
            <TextInput
              style={GlobalStyles.input}
              placeholder="Repetir contraseña"
              secureTextEntry={true}
            />    

            <View style={GlobalStyles.contenedorBotones}>
              <Boton label='Cancelar' backgroundColor='gris' link='../login'></Boton>
              <Boton label='Regístrate' backgroundColor='gris' link='../drawer'></Boton>
            </View>
          </View>
        </View>

        <View style={{position: 'relative', top: 100}}>
          <Pressable onPress={() => {router.push('../login')}}>
            <Text style={GlobalStyles.textoAccedeARefugio}>¿Tienes una cuenta? Accede al refugio.</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

export default signUp;