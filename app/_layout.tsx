import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { Slot } from "expo-router";
import React from "react";
import { useFonts } from 'expo-font';


export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    WendyOne: require("../assets/fonts/WendyOne-Regular.ttf"),
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
};