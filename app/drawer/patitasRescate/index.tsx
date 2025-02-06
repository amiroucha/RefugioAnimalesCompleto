import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native';
import Boton from "../../../components/Boton";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "@/theme/Colors";
import { Alert } from "react-native";


const comunidad = () => {
    return (
        <ScrollView  style={{backgroundColor:Colors.blueDark}}>

            <View style={GlobalStyles.contenedor}>
                
                <View style={GlobalStyles.cajaAzul}>
                    <View style={{margin:10}}>
                        <Text style={GlobalStyles.textoInicioUbi}>
                            Indica el punto donde un animal, una colonia o una 
                            situación que requiere atención y descríbela para que 
                            podamos actuar juntos
                        </Text>
                        <Image 
                            source={require("../../../assets/images/ubicacion.png")}
                            style={GlobalStyles.imagenRescateStyle}
                        ></Image>
                        <TextInput style={GlobalStyles.inputRescate}
                            placeholder="Buscar ubicación..." placeholderTextColor={Colors.blueDark}/>
                        <Text style={GlobalStyles.textoinfoUbi}>La ubicación se añadirá cuando se seleccione en el mapa.</Text>
                    </View>
                    
                </View>
                <View style={{width:'90%'}}>
                    <TextInput placeholder="Describe la situación aquí..." style={GlobalStyles.input2Rescate} placeholderTextColor={Colors.blueDark}/>
                    
                    <View style={GlobalStyles.buttonStyle}>
                        <Boton label="Enviar" backgroundColor="naranja" link="../drawer"
                        onPress={() => Alert.alert("Enviado correctamente")}/>
                    </View>
                
                </View>
                
            </View>
        </ScrollView>

)}


export default comunidad