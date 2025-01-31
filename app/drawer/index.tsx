import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image, Pressable} from 'react-native';
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';


//este es el MENUUUUUUUU------------------------------------------------------------------

const menu = () => {
    const navigation = useNavigation();
    return (
        <View style={GlobalStyles.contenedor}>

            <View style={GlobalStyles.cajaBlancaMenu}>

                <Text style={GlobalStyles.textoSeccion}>Secciones</Text>

                <View style={GlobalStyles.margenSecciones}>
                        <View style={GlobalStyles.seccionesStyle}>
                            <Image 
                                source={require("../../assets/images/patitasRescate.png")}
                                style={GlobalStyles.imagenesMenu}
                            ></Image>
                            <Pressable onPress={()=>{router.push('/drawer/patitasRescate')}}>
                                <Text style={GlobalStyles.seccionesMenu}>Patitas al rescate</Text>
                            </Pressable>
                        </View>
                        <View style={GlobalStyles.seccionesStyle}>
                            <Image 
                                source={require("../../assets/images/patitasMarcha.png")}
                                style={GlobalStyles.imagenesMenu}
                            ></Image>

                            <Pressable onPress= {()=>{
                                Alert.alert('Infórmate de más pulsando sobre Comunidad Animal') }}>
                                <Text style={GlobalStyles.seccionesMenu}>Patitas en marcha</Text>
                            </Pressable>
                        </View>
                        
                        <View style={GlobalStyles.seccionesStyle}>
                            <Image 
                                source={require("../../assets/images/refugio.png")}
                                style={GlobalStyles.imagenesMenu}
                            ></Image>

                            <Pressable onPress={()=>{router.push('/drawer/refugio')}}>
                                <Text style={GlobalStyles.seccionesMenu}>Refugio de patitas</Text>
                            </Pressable>
                        </View>
                       
                        <View style={GlobalStyles.seccionesStyle}>
                            <Image 
                                source={require("../../assets/images/comunidad.png")}
                                style={GlobalStyles.imagenesMenu}
                            ></Image>
                            <Pressable onPress={()=>{router.push('/drawer/comunidad')}}>
                                <Text style={GlobalStyles.seccionesMenu}>Comunidad animal</Text>
                            </Pressable>
                            
                        </View>
                        
                        <View style={GlobalStyles.seccionesStyle}>
                            <Image 
                                source={require("../../assets/images/sobrePetconnect.png")}
                                style={GlobalStyles.imagenesMenu}
                            ></Image>
                            <Pressable onPress= {()=>{Alert.alert('Conócenos navengando en nuestra app') }}>
                            <Text style={GlobalStyles.seccionesMenu}>Sobre Petconnect</Text>
                        </Pressable>
                        </View>
                    </View>
                
            </View>
        
            <Text style={GlobalStyles.textoProtectoras}>PROTECTORAS EN COLABORACIÓN</Text>
            <View style={{flexDirection:'row', columnGap: 20,}}>
                <Image 
                    source={require("../../assets/images/logoProtectora1.png")}
                    style={GlobalStyles.imagenesProtectoras}
                ></Image>
                <Image 
                    source={require("../../assets/images/logoProtectora2.png")}
                    style={GlobalStyles.imagenesProtectoras}
                ></Image>
            </View>
            
        </View>
    )}


export default menu
