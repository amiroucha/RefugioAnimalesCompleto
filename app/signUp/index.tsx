import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { GlobalStyles } from '../../theme/GlobalStyles';
import Boton from '../components/Boton';

const signUp = () => {
  return (
    <View style = {GlobalStyles.contenedorRegistro}>
        <View style={{height:100, width:'100%' , position:'absolute', top:13}}>
            <Image 
            source={require("../../assets/images/logo_2.png")}
            style={{width: 60, height:60, position:'relative', left:'77%'}}
            ></Image>
        </View>

        <Text style={GlobalStyles.tituloRegistro}>Registate en</Text>
        <Text style={GlobalStyles.PetConnectRegistro}>Petconnect</Text>
        <Image 
          source={require("../../assets/images/perroGatoJuntos.png")}
          style={GlobalStyles.perroGatoReg}
        ></Image>

        <View style={GlobalStyles.contenedorGrisOscuro}>
            
            <Image 
                source={require("../../assets/images/huellaBlanca.png")}
                style={GlobalStyles.pataArriba}
            ></Image>
            <Text style= {GlobalStyles.textoUnirse}>¡Hazte parte del refugio!</Text>
            <Image 
                source={require("../../assets/images/huellaBlanca.png")}
                style={GlobalStyles.pataAbajo}
            ></Image>

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
            />
            <TextInput
                style={GlobalStyles.input}
                placeholder="Repetir contraseña"
            />    

            <View style={GlobalStyles.contenedorBotones}>
                <Boton label='Cancelar' backgroundColor='gris'></Boton>
                <Boton label='Registrate' backgroundColor='gris'></Boton>
            </View>


        </View>
        <Text style={GlobalStyles.textoAccedeARefugio}>¿Tienes una cuenta? Accede al refugio</Text>

    </View>  )
}

export default signUp