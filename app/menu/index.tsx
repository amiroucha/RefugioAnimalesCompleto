import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image, Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import { RFValue } from 'react-native-responsive-fontsize';



const menu = () => {
    return (
        <View style={GlobalStyles.contenedor}>
            <View style={{display:'flex',flexDirection: 'row', justifyContent:'space-around', alignItems:'center', width:'100%'}}>                
                <Ionicons name="menu-outline" size={65} color="white"/>
                <Text style={{color:'white', fontSize:RFValue(30), fontFamily: 'WendyOne'}}>PetConnect</Text>
                <Ionicons name="notifications-outline" size={50} color="white"/>
            </View>
            

            <View style={{backgroundColor:'white', width:'95%', borderRadius:30}}>

                <Text style={GlobalStyles.textoSeccion}>Secciones</Text>
                <View style={{flexDirection:'row', columnGap: 20,}}>
                    <View>
                        <Image 
                            source={require("../../assets/images/patitasRescate.png")}
                            style={GlobalStyles.imagenesMenu}
                        ></Image>
                        <Image 
                            source={require("../../assets/images/patitasMarcha.png")}
                            style={GlobalStyles.imagenesMenu}
                        ></Image>
                        <Image 
                            source={require("../../assets/images/refugio.png")}
                            style={GlobalStyles.imagenesMenu}
                        ></Image>
                        <Image 
                            source={require("../../assets/images/comunidad.png")}
                            style={GlobalStyles.imagenesMenu}
                        ></Image>
                        <Image 
                            source={require("../../assets/images/sobrePetconnect.png")}
                            style={GlobalStyles.imagenesMenu}
                        ></Image>
                    </View>
                    <View>
                        <Pressable onPress={()=>{router.push('../patitasRescate')}}>
                            <Text style={GlobalStyles.seccionesMenu}>Patitas al rescate</Text>
                        </Pressable>

                        <Pressable onPress={()=>{router.push('../comunidad')}}>
                            <Text style={GlobalStyles.seccionesMenu}>Patitas en marcha</Text>
                        </Pressable>
                            
                        <Pressable onPress={()=>{router.push('../refugio')}}>
                            <Text style={GlobalStyles.seccionesMenu}>Refugio de patitas</Text>
                        </Pressable>

                        <Pressable onPress={()=>{router.push('../comunidad')}}>
                            <Text style={GlobalStyles.seccionesMenu}>Comunidad animal</Text>
                        </Pressable>
                            
                        <Pressable onPress={()=>{router.push('../login')}}>
                            <Text style={GlobalStyles.seccionesMenu}>Sobre Petconnect</Text>
                        </Pressable>
                    </View>

                </View>
                
                
                
        
            </View>
        
            <Text style={{fontFamily: 'Poppins', color:'white', fontSize:20, fontWeight:'bold', margin:10}}>PROTECTORAS EN COLABORACIÓN</Text>
            <View style={{flexDirection:'row', columnGap: 20,}}>
                <Image 
                    source={require("../../assets/images/logoProtectora1.png")}
                    style={{width:150, height:150}}
                ></Image>
                <Image 
                    source={require("../../assets/images/logoProtectora2.png")}
                    style={{width:150, height:150}}
                ></Image>
            </View>
            
        
        
        
        </View>


    )}


export default menu