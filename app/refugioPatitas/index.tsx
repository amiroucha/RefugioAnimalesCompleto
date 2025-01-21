import { GlobalStyles } from "@/theme/GlobalStyles"
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import Boton from "../components/Boton";
import { Ionicons } from '@expo/vector-icons';



const refugio = () => {
    return (
        <View style={GlobalStyles.contenedor}>
            
            <View style={{flexDirection: 'row', alignItems:'center'}}>

                <Ionicons name="menu-outline" color="white" style={{position:'relative', top: 3, left: 15, fontSize:50}}/>
                <Text style={GlobalStyles.titulocomunidad}>REFUGIO DE PATITAS</Text>
                <Image 
                    source={require("../../assets/images/logo_2.png")}
                    style={{width: 50, height:50, position:'relative', right:15}}
                ></Image>
            </View>

            <View style={GlobalStyles.cajaAzul}>
                <Text style={GlobalStyles.textoInicioUbi}>
                Adoptar es un compromiso paratoda la vida, piénsalo bien antes dedar el paso.
                </Text>
                <Text style={GlobalStyles.textoInicioUbi}>
                Si no puedes cuidarlo hoy, mañana y siempre; no adoptes.
                </Text>

               

            </View>

            <TextInput style={[GlobalStyles.inputRescate, GlobalStyles.busqueda]}
                    placeholder="Búsqueda por nombre..."/>
            
            
        </View>


)}


export default refugio