import { Pressable, Text, StyleSheet, type TextProps } from "react-native";
import { GlobalStyles } from "@/theme/GlobalStyles";
import { RelativePathString , Link} from "expo-router";


interface Props {
    label: string,
    backgroundColor: 'naranja' | 'gris',
    width?:  number,
    onPress?: () => void;
    link: RelativePathString; 
}


export const Boton = ({label, backgroundColor,width, onPress, link}:Props) => {
    const accion = (() => {
        if (onPress) onPress();
    })
    
    return (
        
        <Pressable>
            <Link 
                style={[GlobalStyles.boton,
                    backgroundColor === 'naranja' ? GlobalStyles.botonNaranja:null, backgroundColor ==='gris' 
                    ?GlobalStyles.botonGris:null,
                    {width},
                ]}
                onPress={accion}
                href={link}>{label}
            </Link>
        </Pressable>
    )
};
export default Boton

















/*      <Pressable onPress={accion}>
            {
                route ? (
                    // Si existe la ruta, usamos el Link de Expo Router
                    <Link href={route}>
                        <Text
                            style={[
                                GlobalStyles.boton,
                                backgroundColor === 'naranja' ? GlobalStyles.botonNaranja : null,
                                backgroundColor === 'gris' ? GlobalStyles.botonGris : null,
                                { width },
                            ]}
                        >
                            {label}
                        </Text>
                    </Link>
                ) : (
                    // Si no hay ruta, simplemente un Text que ejecuta la acción onPress
                    <Text
                        style={[
                            GlobalStyles.boton,
                            backgroundColor === 'naranja' ? GlobalStyles.botonNaranja : null,
                            backgroundColor === 'gris' ? GlobalStyles.botonGris : null,
                            { width },
                        ]}
                        onPress={accion}
                    >
                        {label}
                    </Text>
                )
            }
        </Pressable> */