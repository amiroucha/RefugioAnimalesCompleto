import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image, Pressable, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import Boton from '../../../../components/Boton';




const perros = () => {
    return (
        <View style={GlobalStyles.contenedor}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <Ionicons name="menu-outline" color="white" style={{position:'relative', top: 3, left: 15, fontSize:50}}/>
                <Text style={GlobalStyles.titulocomunidad}>PERROS</Text>
                <Image 
                    source={require("../../../../assets/images/logo_2.png")}
                    style={{width: 50, height:50, position:'relative', right:15}}
                ></Image>
            </View>
            <View style={{backgroundColor:'white', borderRadius:30, width:'90%'}}>
                <Image 
                    source={require("../../../../assets/images/Pluto.png")}
                    style={{width: 300, height:300, borderRadius:30, alignSelf:'center', margin:10,}}
                ></Image>

                <View style={GlobalStyles.nombreUbica}>
                    <Text style={GlobalStyles.nombrePluto}>Pluto</Text>
                    <Ionicons name="heart-circle" color="blue" size={45} style={GlobalStyles.iconoCorazon}/>
                </View>
                
                <View style={{flexDirection: 'row',columnGap:5,}}>
                    <Ionicons name="location" size={30} style={GlobalStyles.iconoUbi}/>
                    <Text style={{position:'relative', }}>Murcia</Text>
                </View>

               <View style={{flexDirection: 'row',}}>
                    <View style={GlobalStyles.cajaNaranjaPerro}>
                        <Text style={[GlobalStyles.datosPerro, {fontWeight:'bold',}]}>Sexo</Text>
                        <Text style={[GlobalStyles.datosPerro ,{fontSize: 17,}]}>Macho</Text>
                    </View>
                    <View style={GlobalStyles.cajaNaranjaPerro}>
                        <Text style={[GlobalStyles.datosPerro, {fontWeight:'bold',}]}>Edad</Text>
                        <Text style={[GlobalStyles.datosPerro ,{fontSize: 17,}]}>1.5 años</Text>
                    </View>
                    <View style={GlobalStyles.cajaNaranjaPerro}>
                        <Text style={[GlobalStyles.datosPerro, {fontWeight:'bold',}]}>Tipos</Text>
                        <Text style={[GlobalStyles.datosPerro ,{fontSize: 17,}]}>Bodeguero</Text>
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
            <Boton label='Dame un hogar' backgroundColor='naranja' link='../../menu'></Boton>
        </View>
        
    )}


export default perros