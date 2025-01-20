import { Pressable, Text, StyleSheet, type TextProps } from "react-native";
import * as Haptics from 'expo-haptics';
import { GlobalStyles } from "@/theme/GlobalStyles";


interface Props {
    label: string,
    backgroundColor: 'naranja' | 'gris',
    width?:  number,
    onPress?: () => void;
}


export const Boton = ({label, backgroundColor,width, onPress}:Props) => {

    const accion = (() => {
        if (onPress) onPress()
        Haptics.selectionAsync();
    })
    

    return (
        <Pressable>
            <Text 
                style={[GlobalStyles.boton,
                    backgroundColor === 'naranja' ? GlobalStyles.botonNaranja:null, backgroundColor ==='gris' 
                    ?GlobalStyles.botonGris:null,
                    {width},
                ]}
                onPress={accion}>{label}</Text>
        </Pressable>
    )
};
export default Boton
