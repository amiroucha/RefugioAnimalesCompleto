import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { reloadAppAsync } from "expo";
import { Dimensions, TextInput, Text } from 'react-native';

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
//Drawer-----------------------------------------------------------------
drawerUserContainer: {
    backgroundColor: Colors.blueDark,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0,
    marginBottom: 30,
    height: 140,
    borderRadius: 10,
    flexDirection: 'row',
    columnGap: 30,
},
drawerUserImg: {
    width: 100, 
    height: 100, 
    alignSelf:'center', 
    borderRadius: 50
},
headerStyle:{
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    width:'100%'
},
tituloHeader:{
    fontSize: RFValue(21), 
    fontFamily:'Poppins',
    color: Colors.white,
    fontWeight:'bold', 
    position: 'relative',
    alignSelf:'center',
},
userName:{
    color: Colors.white,
    fontFamily: 'Poppins',
    fontSize: 19,
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
    fontSize: RFValue(20),
    top: 60,
    textAlign: "center",
    fontFamily:'Poppins',
    color: Colors.blueDark,
    textDecorationStyle:'double'

},
PetConnectRegistro:{
    textAlign: "center",
    fontSize: RFValue(45),
    fontFamily:'WendyOne',
    color: Colors.blueDark,
    marginBottom: 20,
    top:50,
},

textoUnirse:{
    color: Colors.white,
    fontSize: RFValue(24),
    fontWeight: 'bold',
    textAlign: "center",
    fontFamily:'Poppins',

},
perroGatoReg:{
    width: width * 0.64, 
    height: height * 0.23,
    position:'absolute', 
    alignSelf:'center',    
    top: 150,
},
contenedorBotones:{
    display:'flex',
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'space-between',
},
textoAccedeARefugio:{
    color:Colors.blueText, 
    fontSize: RFValue(15), 
    fontFamily:'Poppins',
    textDecorationLine:"underline",
},
//menu----------------------------------------
cajaBlancaMenu:{
    backgroundColor: Colors.white,
    width:'90%',
    borderRadius:30,
    paddingBottom:10,
    paddingTop:20
},
margenSecciones:{
    margin:10,
    marginLeft:10
},
tituloMenu:{
    color: Colors.white,
    fontSize:RFValue(30),
    fontFamily: 'WendyOne'
},
textoSeccion:{
    color: Colors.blueText,
    fontFamily:'Poppins',
    fontSize: RFValue(25),
    textAlign:'left',
    fontWeight: 'bold',
    marginLeft:20,
    
},
textoProtectoras:{
    fontFamily: 'Poppins',
    color:'white',
    fontSize:RFValue(17),
    fontWeight:'bold',
    alignSelf:'center',
    marginBottom:10,
    marginTop:10
},
seccionesMenu:{
    color: Colors.blueText,
    fontFamily:'Poppins',
    textDecorationLine:'underline',
    fontSize: RFValue(20),
    fontWeight:'bold'
},
imagenesMenu:{
    width:64,
    height:64,
    margin:10,
    borderRadius:10,
},
seccionesStyle:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
},
imagenesProtectoras:{
    width:150,
    height:150,
    borderRadius:10
},
//comunidad animal-----------------------------------------------
cajaNaranja:{
    backgroundColor: Colors.orangeContainer,
    borderRadius:30,
    width:'90%',
    marginBottom: 20,
    paddingTop:10,
    alignItems:'center'
},
cajaBlanca:{
    backgroundColor: Colors.white,
    borderRadius:30,
    width:'90%',
    flexDirection:'column',
    paddingBottom:10,
},
titulos:{
    fontFamily:'Poppins',
    fontSize:RFValue(18),
    fontWeight:'bold', 
    color: Colors.blueText,
    padding:10,
    paddingBottom: 0,
    marginTop:10,
    marginBottom:10
},
parrafoPatitas:{
    fontSize: RFValue(14),
    fontFamily: 'Poppins',
    textAlign:'justify',
    padding: 10,
    color: Colors.black,
},
viewAzulDiscusion:{
    display:'flex',
    backgroundColor: Colors.blueLight,
    padding: 20,
    borderRadius:30,
    marginLeft: 15,
    marginRight:20, 
    marginBottom:10,
    width:'90%',
    height:100,
    flexDirection:'column',
    paddingBottom:10,
},
textosTemas:{
    fontSize: RFValue(15),
    fontFamily: 'Poppins',
    fontWeight:'bold', 
    textAlign:'justify',
    color: Colors.blueText,
},
iconos:{
    color: Colors.blueText,
    fontSize: RFValue(16),
    //no he podido poner los iconos a la izquierda
},
//patitas al rescate-----------------------------------------------
cajaAzul:{
    backgroundColor: Colors.blueLight,
    borderRadius:30,
    width:'90%',
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:5
},
textoInicioUbi:{
    color: Colors.blueText,
    fontFamily: 'Poppins',
    fontSize: RFValue(14),
    fontWeight: 'bold',
    textAlign:'justify',
    marginBottom:10
},
textoinfoUbi:{
    backgroundColor: Colors.white, 
    paddingLeft:20,
    paddingRight:20,
    borderRadius: 30,
    padding:10,
    color: Colors.blueText,
    fontFamily: 'Poppins',
    fontSize: RFValue(14),
},
inputRescate:{
    backgroundColor: Colors.white,
    borderRadius: 30,
    padding: 10,
    fontSize: RFValue(14),
    marginBottom: 10,
    height: height * 0.06,
    fontFamily: 'Poppins',
    color: Colors.blueText,
},
input2Rescate:{
    backgroundColor: Colors.white,
    borderRadius: 30,
    color: Colors.blueText,
    height: height * 0.1,
    width:'100%',
    fontSize: RFValue(14),
    textAlignVertical:'top',
    fontFamily: 'Poppins',
    padding:10,
    paddingLeft:20,
    marginTop:10
},
imagenRescateStyle:{
    width: width * 0.8,
    height: height * 0.35,
    position:'relative', 
    alignSelf:'center',
    borderRadius:30,
    marginBottom:15,
    fontSize: RFValue(16),
    fontFamily: 'Poppins',
    borderColor:Colors.blueDark,
    borderWidth:1
    
},
buttonStyle:{
    width:'100%',
    alignSelf:'flex-end',
    paddingTop:RFValue(10),
    fontFamily: 'Poppins',
},
//refugio de patitas...............................
primerTexto:{
    padding: 10,
    borderRadius:30,
    fontSize:RFValue(15),
    fontFamily: 'Poppins',
    color: Colors.blueDark,
    fontWeight:'normal',
    textAlign:'justify',
    marginLeft:10,
    marginRight:10
},
imagenCategoriaStyle:{
    width: 90,
    height:90,
    borderRadius:20
},
viewCategorias:{
    display:'flex',
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius:30,
    width:'90%',
    marginBottom:15,
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
    marginBottom:15,
    fontSize:RFValue(14)
},
viewAnimales:{  
    display:'flex',
    backgroundColor: Colors.white,
    width:'90%',
    borderRadius:30, 
    flexDirection: "row",
    flexWrap:'wrap',
    justifyContent:'space-between',
    marginBottom:10
},
contenedorAnimales:{
    backgroundColor: Colors.orangeContainer,
    borderRadius:30,
    width: 155,
    alignItems:'center',
    marginTop: 10,
    marginLeft:10,
    marginRight:10,
    marginBottom:10
},
imagenPerros:{
    width: width * 0.35,
    height: height * 0.16,
    borderRadius:20,
    marginTop:7
},
nombrePerro:{
    fontFamily: 'Poppins',
    color: Colors.blueText,
    fontWeight:'bold',
    alignSelf:'flex-start',
    paddingLeft: 15,
    fontSize:RFValue(14),
},

//perros----------------------------------
imagenPerroPluto:{
    width: 320,
    height:280,
    borderRadius:30,
    alignSelf:'center',
    margin:10,
},
nombreUbica:{
    //contenedor del nombre y la ubicacion
    flexDirection: 'row',
    columnGap: 230,
    margin:10,
    fontFamily: 'Poppins',
},
iconoUbi:{
    color: Colors.blueText,
},
iconoCorazon:{
    color: Colors.blueText
},
nombrePluto:{
    fontFamily: 'Poppins',
    color: Colors.blueText,
    fontWeight:'bold',
    fontSize: RFValue(20),
},
cajaNaranjaPerro:{
    backgroundColor: Colors.orangeContainer,
    borderRadius:20,
    width: 110,
    height: 55,
    alignItems:'center',
    justifyContent:'space-between',
    margin:1
},
datosPerro:{
    fontFamily: 'Poppins',
    color: Colors.blueText,
    fontSize: 18,
},
perfilAna:{
    flexDirection:'row',
    justifyContent:'space-between',
},
cajaAzulperros:
{
    backgroundColor: Colors.blueLight,
    borderRadius:25,
    marginBottom: 10,
    marginTop:10,
    justifyContent:'space-around'
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
    height: 40,
    alignSelf:'center'

},


})
