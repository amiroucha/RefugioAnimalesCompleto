import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { reloadAppAsync } from "expo";

export const GlobalStyles =  StyleSheet.create({
contenedor:{
    backgroundColor: Colors.blueDark,
    alignItems:  'center',
    flex: 1,
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
    fontSize: 21,
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
    height: 59 ,
},
botonGris:
{
    backgroundColor: Colors.grey,
    color: Colors.white,
    borderBottomColor: Colors.white,
    width:'auto',
    borderWidth: 4,
    height: 59 ,
    textAlign:'center',
    padding: 10,
    margin:10,
    marginBottom:30,
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
    fontSize: 29,
    marginTop: 100,
    marginBottom:3,
    textAlign: "center",
    fontFamily:'Poppins',
    color: Colors.white,
},
PetConnect:{
    textAlign: "center",
    fontSize: 49,
    fontFamily:'WendyOne',
    color: Colors.white,
},
perroGato:{
    width: 250, 
    height:210, 
    position:'relative', 
    left:69, 
    top:-47,
}
,
textoAccede:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
    fontFamily:'Poppins',
    color: Colors.blueText,
    //backgroundColor: Colors.orangeInput,
},
input: {
    borderRadius: 30,
    padding: 10,
    fontSize: 16,
    margin: 10,
    marginBottom: 15,
    backgroundColor: Colors.orangeInput,
},
olvidarContra:{
    fontSize: 18,
    color: Colors.white,
    marginBottom: 20,
    fontFamily:'Poppins',
    textDecorationLine:"underline",
},
textRegistrar:{
    fontSize: 20,
    color: Colors.blueText,
    textAlign: "left", 
    marginLeft: 10,  
    textDecorationLine:"underline"

},
//patas-------------------------------------------------------
pataArriba:{
    width: 40,
    height:40,
    alignSelf:'flex-start',
    marginLeft: 14,
    transform:[{rotate :'-45deg'}] //añadi esto para rotar
},
pataAbajo:{
    width: 40,
    height:40,
    alignSelf:'flex-end',
    marginRight: 14,
    transform:[{rotate :'45deg'}] //añadi esto para rotar
},
//PANTALLA DE Registro------------------------------------
contenedorGrisOscuro:{
    backgroundColor:Colors.greyDark,
    width: '100%',
    borderRadius: 30,
    position:'absolute',
    bottom:50,
}, 
tituloRegistro:{
    fontSize: 30,
    top: 60,
    textAlign: "center",
    fontFamily:'Poppins',
    color: Colors.blueDark,

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
    columnGap: 60,
},
textoAccedeARefugio:{
    color:Colors.blueText, 
    bottom: 5, 
    fontSize: 20, 
    fontFamily:'Poppins',
    position: 'absolute'
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
    borderRadius:10 //añadi esto para redondear los bordes de las imagenes naranjas
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
},

})
