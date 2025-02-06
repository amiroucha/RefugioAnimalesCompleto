import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image, Pressable, TextInput, Alert, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import Boton from '../../../../components/Boton';
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "@/theme/Colors";




const perros = () => {
    return (
        <ScrollView  style={{backgroundColor:Colors.blueDark}}>
        <View style={GlobalStyles.contenedor}>
            
            <View style={{backgroundColor:'white', borderRadius:30, width:'90%'}}>
                
                <View style={{display:'flex',justifyContent:'space-between', margin:10}}>
                    <Image 
                        source={require("../../../../assets/images/Pluto.png")}
                        style={GlobalStyles.imagenPerroPluto}
                    ></Image>

                    <View style={GlobalStyles.nombreUbica}>
                        <Text style={GlobalStyles.nombrePluto}>Pluto</Text>
                        <Ionicons name="heart-circle" color="blue" size={45} style={GlobalStyles.iconoCorazon}/>
                    </View>
                    
                    <View style={{flexDirection: 'row',}}>
                        <Ionicons name="location" size={30} style={GlobalStyles.iconoUbi}/>
                        <Text style={{fontSize:RFValue(16)}}>Murcia</Text>
                    </View>

                    <View style={{display:'flex',flexDirection: 'row', justifyContent:'space-between', flexWrap:'wrap'}}>
                        <View style={GlobalStyles.cajaNaranjaPerro}>
                            <Text style={[GlobalStyles.datosPerro, {fontWeight:'bold',}]}>Sexo</Text>
                            <Text style={[GlobalStyles.datosPerro ,{fontSize:RFValue(16),}]}>Macho</Text>
                        </View>
                        <View style={GlobalStyles.cajaNaranjaPerro}>
                            <Text style={[GlobalStyles.datosPerro, {fontWeight:'bold',}]}>Edad</Text>
                            <Text style={[GlobalStyles.datosPerro ,{fontSize:RFValue(16)}]}>1.5 años</Text>
                        </View>
                        <View style={GlobalStyles.cajaNaranjaPerro}>
                            <Text style={[GlobalStyles.datosPerro, {fontWeight:'bold',}]}>Tipo</Text>
                            <Text style={[GlobalStyles.datosPerro ,{fontSize:RFValue(16)}]}>Bodeguero</Text>
                        </View>
                    </View>

                    <View style={GlobalStyles.cajaAzulperros}>
                        <View style={GlobalStyles.perfilAna}>
                            <Image 
                                source={require("../../../../assets/images/Eros.png")}
                                style={{width: 60, height:60, borderRadius:30, borderWidth: 2, alignSelf:'center', margin:10,}}
                            ></Image>
                            <View style={{flexDirection:'column',}}>
                                <Text style={GlobalStyles.datosPerro}>Ana</Text>
                                <Text style={GlobalStyles.datosPerro}>PerrosAbandona2</Text>
                            </View>

                            <Ionicons name="call-outline" size={30} style={GlobalStyles.iconoPerros}/>
                            <Ionicons name="chatbubble-ellipses" size={30} style={GlobalStyles.iconoPerros}/>

                        </View>
                        
                        <Text style={GlobalStyles.nombreAna}>
                            Pluto entró de forma inesperada a una peluquería en la que justo estaba uno de nuestros 
                            voluntarios, no lleva chip y nadie lo ha reclamado así que nusca familia definitiva!
                        </Text>
                    </View>
                </View>
            </View>
               
            <View style={{width:"90%", marginTop:10}}>
            <Boton label='Dame un hogar' backgroundColor='naranja' link='../../drawer'
                onPress={() => Alert.alert("Ponte en contacto con nosotros")}></Boton>

            </View>
            
        </View>
        </ScrollView>
    )}


export default perros