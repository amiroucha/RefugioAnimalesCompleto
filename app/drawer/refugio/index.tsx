import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image, Pressable, TextInput, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import { Colors } from "@/theme/Colors";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';



const refugio = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={GlobalStyles.contenedor}>
                
                <View style={GlobalStyles.cajaNaranja}>
                    <Text style={[GlobalStyles.primerTexto , {fontWeight:'bold'}, {fontSize:RFValue(16)}]}>Adoptar es un compromiso paratoda la vida, piénsalo bien antes de dar el paso.{"\n"}<Text style={[GlobalStyles.primerTexto , {color:Colors.black}]}>Si no puedes cuidarlo hoy, mañana y siempre; no adoptes.</Text></Text>
                
                    <Image 
                        source={require("../../../assets/images/perritosYgatitos.png")}
                        style={{width: 250, height:37, alignSelf:'center', }}
                    ></Image>
                </View>
                <View style={GlobalStyles.viewCategorias}>
                    <View style={{marginLeft:10, marginRight:10}}>
                        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={GlobalStyles.titulo2Refu}>CATEGORÍAS</Text>
                            <Text style={[GlobalStyles.titulo2Refu]}>Ver todo</Text>
                        </View>
                        
                        <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                            <Image 
                                source={require("../../../assets/images/gatosRefugio.png")}
                                style={GlobalStyles.imagenCategoriaStyle}
                            ></Image>
                            <Image 
                                source={require("../../../assets/images/perrosRefugio.png")}
                                style={GlobalStyles.imagenCategoriaStyle}
                            ></Image>
                            <Image 
                                source={require("../../../assets/images/conejoRefugio.png")}
                                style={GlobalStyles.imagenCategoriaStyle}
                            ></Image>
                        </View>
                    </View>
                    
                </View>

                
                <TextInput style={GlobalStyles.inputRefugio} placeholder="Búsqueda por nombre..." placeholderTextColor={Colors.blueDark}/>

                <View style={GlobalStyles.viewAnimales}>
                    <Pressable onPress={()=>{router.push('./refugio/perros')}}>
                        <View style={GlobalStyles.contenedorAnimales}>
                            <Image 
                                source={require("../../../assets/images/Pluto.png")}
                                style={GlobalStyles.imagenPerros}
                            ></Image>
                            <Text style={GlobalStyles.nombrePerro}>Pluto</Text>
                            <Text style={[GlobalStyles.nombrePerro, {fontWeight:'normal'}]}>Macho {"\n"}(1.5 años)</Text>
                        </View>
                    </Pressable>
                    
                    <View style={GlobalStyles.contenedorAnimales}>
                        <Image 
                            source={require("../../../assets/images/AfroShaggy.png")}
                            style={[GlobalStyles.imagenPerros, {height:138, width:138, marginTop:3}]}
                        ></Image>
                        <Text style={GlobalStyles.nombrePerro}>Afro y Shaggy</Text>
                        <Text style={[GlobalStyles.nombrePerro, {fontWeight:'normal'}, {marginBottom:5}]}>Machos {"\n"}(3 meses)</Text>
                    </View>

                    <View style={GlobalStyles.contenedorAnimales}>
                        <Image 
                            source={require("../../../assets/images/Stelle.png")}
                            style={GlobalStyles.imagenPerros}
                        ></Image>
                        <Text style={GlobalStyles.nombrePerro}>Stelle</Text>
                        <Text style={[GlobalStyles.nombrePerro, {fontWeight:'normal'}, {marginBottom:5}]}>Hembra {"\n"}(1.5 años)</Text>
                    </View>

                    <View style={GlobalStyles.contenedorAnimales}>
                        <Image 
                            source={require("../../../assets/images/Eros.png")}
                            style={GlobalStyles.imagenPerros}
                        ></Image>
                        <Text style={GlobalStyles.nombrePerro}>Eros</Text>
                        <Text style={[GlobalStyles.nombrePerro, {fontWeight:'normal'}, {marginBottom:5}]}>Macho {"\n"}(1 año)</Text>
                    </View>

                </View>

            </View>
        </ScrollView>
       
        
    )} 


export default refugio