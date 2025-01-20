import { GlobalStyles } from "@/theme/GlobalStyles";
import { Pressable, Text, StyleSheet, type TextProps } from "react-native";
import * as Haptics from 'expo-haptics';

interface Props {
    label: string,
    onPress?: () => void;
}

export const BotonAcceder = ({label, onPress}:Props) => {

    const accion = (() => {
        if (onPress) onPress()
        Haptics.selectionAsync();

    })

    return (
        <Pressable
          style={({ pressed }) => [
            GlobalStyles.boton,
            pressed ? GlobalStyles.boton : null,
          ]}
          onPress={accion} >
          <Text style={GlobalStyles.tituloLogin}>{label}</Text>
        </Pressable>
      )
};