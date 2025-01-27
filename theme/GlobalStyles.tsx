import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { reloadAppAsync } from "expo";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const GlobalStyles =  StyleSheet.create({
contenedor:{
    backgroundColor: Colors.blueDark,
    alignItems:  'center',
    flex: 1,
    justifyContent: 'center',
    
},
box: {
    width: '100%',
    height: 100,
  },
contenedorRegistro:{
    backgroundColor: Colors.white,
    alignItems:  'center',
    flex: 1,
    flexDirection: 'column',
},
//botones -------------------------------------------
boton:{
    width: 150,
    height: 100,
    textAlign: 'center',
    padding: 10,
    fontSize: RFValue(16),
    borderRadius: 30,
    backgroundColor: Colors.orangeInput,
    fontFamily:'Poppins',
    fontWeight:'bold',
},
botonNaranja:
{
    backgroundColor: Colors.orangeButton,
    color:Colors.blueText,
    textAlign:'center',
    padding: 15,
    width:'auto',
    height: height * 0.07,

},
botonGris:
{
    backgroundColor: Colors.grey,
    color: Colors.white,
    borderColor: Colors.white,
    width:'auto',
    borderWidth: 4,
    height: 59 ,
    textAlign:'center',
    padding: 10,
    margin:10,
    
},
//PANTALLA DE LOGIN------------------------------------
fondoBlancoLog:{
    backgroundColor: Colors.white,
    borderRadius: 30,
    flex: 1,
    width: '100%',
    top:50,
    marginBottom:59,
},
tituloLogin:{
    fontSize: RFValue(20),
    marginTop: 100,
    marginBottom:3,
    textAlign: "center",
    fontFamily:'Poppins',
    color: Colors.white,
},
PetConnect:{
    textAlign: "center",
    fontSize: RFValue(45),
    fontFamily:'WendyOne',
    color: Colors.white,
},
perroGato:{
    width: width * 0.64, 
    height: height * 0.23, 
    position:'relative',
    alignSelf:'center',
    top:-47, 
}
,
textoAccede:{
    fontSize: RFValue(30),
    fontWeight: 'bold',
    textAlign: "center",
    fontFamily:'Poppins',
    color: Colors.blueText,
},
input: {
    borderRadius: 30,
    padding: 13,
    fontSize: RFValue(16),
    marginBottom: 10,
    width:'100%',
    height: height * 0.07,
    backgroundColor: Colors.orangeInput,
},
olvidarContra:{
    fontSize: RFValue(15),
    color: Colors.white,
    marginBottom: 20,
    marginTop:15,
    fontFamily:'Poppins',
    textDecorationLine:"underline",
},
textRegistrar:{
    fontSize:  RFValue(16),
    color: Colors.blueText,
    textDecorationLine:"underline",
    alignSelf:'center'

},
//patas-------------------------------------------------------
pataArriba:{
    width: width * 0.13,
    height: height * 0.05,
    alignSelf:'flex-start',
    transform:[{rotate: '-45deg'}],
},
pataAbajo:{
    width: width * 0.13,
    height:height * 0.05,
    alignSelf:'flex-end',
    marginBottom:10,
    transform:[{rotate: '45deg'}],
},
//PANTALLA DE Registro------------------------------------
contenedorGrisOscuro:{
    backgroundColor:Colors.greyDark,
    borderRadius: 30,
    width: '100%',
    top:'20%',
}, 
tituloRegistro:{
    fontSize: 30,
    top: 60,
    textAlign: "center",
    fontFamily:'Poppins',
    color: Colors.blueDark,
    textDecorationStyle:'double'

},
PetConnectRegistro:{
    textAlign: "center",
    fontSize: 50,
    fontFamily:'WendyOne',
    color: Colors.blueDark,
    marginBottom: 20,
    top:50,
},

textoUnirse:{
    color: Colors.white,
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: "center",
    fontFamily:'Poppins',

},
perroGatoReg:{
    width: 250, 
    height:210, 
    position:'absolute', 
    alignSelf:'center',    
    top: 150,
},
contenedorBotones:{
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'space-between',
},
textoAccedeARefugio:{
    color:Colors.blueText, 
    fontSize: RFValue(15), 
    fontFamily:'Poppins',
},
//menu----------------------------------------
textoSeccion:{
    color: Colors.blueText,
    fontFamily:'Poppins',
    fontSize: 30,
    textAlign:'left',
    margin: 20,
},
seccionesMenu:{
    color: Colors.blueText,
    fontFamily:'Poppins',
    textDecorationLine:'underline',
    fontSize: 25,
    //he puesto el margen para que parezca centrado pero no se como centrarlo con las imagenes
    marginBottom: 46,
},
imagenesMenu:{
    width:60,
    height:60,
    margin:10,
},
//comunidad animal-----------------------------------------------
titulocomunidad:{
    fontSize: 27, 
    fontFamily:'Poppins',
    color: Colors.white,
    fontWeight:'bold', 
    margin: 20,
    position: 'relative',
    alignSelf:'center'
},
cajaNaranja:{
    backgroundColor: Colors.orangeContainer,
    borderRadius:30,
    width:'90%',
    marginBottom: 20,
},
cajaBlanca:{
    backgroundColor: Colors.white,
    borderRadius:30,
    width:'90%',
    flexDirection:'column',
},
titulos:{
    fontFamily:'Poppins',
    fontSize:22,
    fontWeight:'bold', 
    color: Colors.blueText,
    padding:10,
    paddingBottom: 0,
},
parrafoPatitas:{
    fontSize: 17,
    fontFamily: 'Poppins',
    textAlign:'justify',
    padding: 10,
    color: Colors.blueText,
},
textosTemas:{
    backgroundColor: Colors.blueLight,
    padding: 20,
    borderRadius:30,
    margin: 10, 
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight:'bold', 
    textAlign:'justify',
    color: Colors.blueText,
},
iconos:{
    color: Colors.blueText,
    fontSize: 25,
    //no he podido poner los iconos a la izquierda
},
//patitas al rescate-----------------------------------------------
cajaAzul:{
    backgroundColor: Colors.blueLight,
    borderRadius:30,
    marginLeft: 15,
    marginRight: 15,

},
textoInicioUbi:{
    color: Colors.blueText,
    fontFamily: 'Poppins',
    fontSize: 16,
    padding:15,
    fontWeight: 'bold',
    marginLeft: 15,
},
textoinfoUbi:{
    backgroundColor:'white', 
    padding:14, 
    borderRadius: 30,
    color: Colors.blueText,
    fontFamily: 'Poppins',
    fontSize: 16,
    margin:15,
},
inputRescate:{
    backgroundColor: Colors.white,
    borderRadius: 30,
    margin: 15,
    marginBottom: 0,
    marginLeft: 15,
    color: Colors.blueText,
},
input2Rescate:{
    backgroundColor: Colors.white,
    borderRadius: 30,
    margin: 15,
    color: Colors.blueText,
    width:'85%',
    height:  80,

},
//refugio de patitas...............................
primerTexto:{
    padding: 10,
    borderRadius:30,
    fontFamily: 'Poppins',
},
titulo2Refu:{
    color: Colors.blueDark,
    fontWeight:'bold',
    fontSize: 19,
    fontFamily: 'Poppins',
},
inputRefugio:{
    backgroundColor: Colors.white,
    color: Colors.blueDark,
    padding: 10,
    borderRadius:30,
    width: '90%',
    fontFamily: 'Poppins',
},
contenedorAnimales:{
    backgroundColor: Colors.orangeContainer,
    borderRadius:30,
    width: 170,
    alignItems:'center',
    marginBottom: 10,
},
nombrePerro:{
    fontFamily: 'Poppins',
    color: Colors.blueText,
    fontWeight:'bold',
    alignSelf:'flex-start',
    paddingLeft: 20,
},

//perros----------------------------------
nombreUbica:{
    //contenedor del nombre y la ubicacion
    flexDirection: 'row',
    columnGap: 230,
    margin:10,


},
iconoUbi:{
    color: Colors.blueText,
},
iconoCorazon:{
    color: Colors.blueText,
    top: -9,
    position:'absolute',
    right: 15,
},
nombrePluto:{
    fontFamily: 'Poppins',
    color: Colors.blueText,
    fontWeight:'bold',
    fontSize: 20,
},
cajaNaranjaPerro:{
    backgroundColor: Colors.orangeContainer,
    borderRadius:30,
    width: 110,
    height: 55,
    alignItems:'center',
    margin: 3,
},
datosPerro:{
    fontFamily: 'Poppins',
    color: Colors.blueText,
    fontSize: 18,
},
perfilAna:{
    flexDirection:'row',
},
cajaAzulperros:
{
    backgroundColor: Colors.blueLight,
    borderRadius:30,
    margin: 5,
},
nombreAna:{
    fontFamily: 'Poppins',
    color: Colors.blueText,
    fontSize: 16,
    padding:5
},
iconoPerros:{
    backgroundColor: Colors.orangeContainer,
    borderRadius: 60,
    padding: 5,
    height: 45,

},


})
