import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image, StyleSheet } from 'react-native';
import Boton from "../components/Boton";
import { Ionicons } from '@expo/vector-icons';



const comunidad = () => {
    return (
        <View style={GlobalStyles.contenedor}>
            
            <View style={{flexDirection: 'row', alignItems:'center'}}>

                <Ionicons name="menu-outline" color="white" style={{position:'relative', top: 3, left: 15, fontSize:50}}/>
                <Text style={GlobalStyles.titulocomunidad}>COMUNIDAD ANIMAL</Text>
                <Image 
                    source={require("../../assets/images/logo_2.png")}
                    style={{width: 50, height:50, position:'relative', right:15}}
                ></Image>
            </View>
            
            <View style={GlobalStyles.cajaNaranja}>
                <Text style={GlobalStyles.titulos}>PATITAS EN MARCHA (eventos)</Text>
                <Text style={GlobalStyles.parrafoPatitas}>
                    Descubre eventos solidarios creados por la comunidad: actividades deportivas, caminatas y mucho más. 
                    Cada participación suma para ayudar a los animales que más lo necesitan. ¡Únete y sé parte del cambio!
                </Text>
            </View>

            <View style={GlobalStyles.cajaBlanca}>
                <Text style={GlobalStyles.titulos}>TEMAS DE DISCUSIÓN</Text>

                <Text style={GlobalStyles.textosTemas}> 
                    Guías de alimentación B.A.R.F. para tu animal. 
                    <Ionicons name="chatbubble-ellipses" style={GlobalStyles.iconos}>12</Ionicons>
                </Text>

                <Text style={GlobalStyles.textosTemas}>
                    Consejos para sobrellevar la ola de calor con tu mascota.
                    <Ionicons name="chatbubble-ellipses" style={GlobalStyles.iconos}>45</Ionicons>

                </Text>
                
                <Text style={GlobalStyles.textosTemas}>
                    Como empezar a adiestrar a tu mascota.
                    <Ionicons name="chatbubble-ellipses" style={GlobalStyles.iconos}>32</Ionicons>

                </Text>
                

                <View style={{alignItems:'flex-end', marginEnd:10,}}>
                    <Boton label='Nuevo' backgroundColor="naranja" width={120}></Boton>
                </View>
            </View>
        
        </View>


    )}


export default comunidad
