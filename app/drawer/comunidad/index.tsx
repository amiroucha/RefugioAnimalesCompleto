import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image, StyleSheet, Alert, ScrollView } from 'react-native';
import Boton from "../../../components/Boton";
import { Ionicons } from '@expo/vector-icons';
import { withDecay } from "react-native-reanimated";



const comunidad = () => {
    return (
        <ScrollView contentContainerStyle={GlobalStyles.contenedor}>
    
            <View style={GlobalStyles.cajaNaranja}>
                <View style={{ width: "94%" }}>
                    <Text style={GlobalStyles.titulos}>PATITAS EN MARCHA (eventos)</Text>
                    <Text style={GlobalStyles.parrafoPatitas}>
                        Descubre eventos solidarios creados por la comunidad: actividades deportivas, caminatas y mucho más. 
                        Cada participación suma para ayudar a los animales que más lo necesitan. ¡Únete y sé parte del cambio!
                    </Text>
                </View>
            </View>

            <View style={GlobalStyles.cajaBlanca}>
                <Text style={GlobalStyles.titulos}>TEMAS DE DISCUSIÓN</Text>

                <View style={GlobalStyles.viewAzulDiscusion}>
                    <Text style={GlobalStyles.textosTemas}> 
                        Guías de alimentación B.A.R.F. para tu animal. 
                    </Text>
                    <Ionicons name="chatbubble-ellipses" style={GlobalStyles.iconos}>12</Ionicons>
                </View>
                
                <View style={GlobalStyles.viewAzulDiscusion}>
                    <Text style={GlobalStyles.textosTemas}>
                        Consejos para sobrellevar la ola de calor con tu mascota.
                    </Text>
                    <Ionicons name="chatbubble-ellipses" style={GlobalStyles.iconos}>45</Ionicons>
                </View>

                <View style={GlobalStyles.viewAzulDiscusion}>
                    <Text style={GlobalStyles.textosTemas}>
                        Cómo empezar a adiestrar a tu mascota.
                    </Text>
                    <Ionicons name="chatbubble-ellipses" style={GlobalStyles.iconos}>32</Ionicons>
                </View>

                <View style={{ alignItems: 'flex-end', width: '95%' }}>
                    <Boton 
                        label="Nuevo" 
                        backgroundColor="naranja" 
                        width={120} 
                        link="../drawer"
                        onPress={() => Alert.alert("Comunidad Animal cargando...")} 
                    />
                </View>
            </View>

        </ScrollView>


    )}


export default comunidad