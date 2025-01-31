import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import Boton from "../../../components/Boton";
import { Ionicons } from '@expo/vector-icons';



const comunidad = () => {
    return (
        <View style={GlobalStyles.contenedor}>
            
        

            <View style={GlobalStyles.cajaAzul}>
                <Text style={GlobalStyles.textoInicioUbi}>
                    Indica el punto donde un animal, una colonia o una 
                    situación que requiere atención y descríbela para que 
                    podamos actuar juntos
                </Text>
                <Image 
                    source={require("../../../assets/images/ubicacion.png")}
                    style={{width: 300, height: 280, position:'relative', 
                        alignSelf:'center', borderRadius:30, margin: 15, marginBottom:0}}
                ></Image>
                <TextInput style={GlobalStyles.inputRescate}
                    placeholder="Buscar ubicación..."/>

                <Text style={GlobalStyles.textoinfoUbi}>La ubicación se añadirá cuando se seleccione en el mapa.</Text>


            </View>
            <TextInput placeholder="Describe la situación aquí..." style={GlobalStyles.input2Rescate}/>
            <Boton label='Enviar' backgroundColor='naranja' link='../patitasRescate'></Boton>
        </View>


)}


export default comunidad