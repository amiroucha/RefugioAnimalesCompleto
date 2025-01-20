import { NavigationContainer } from "@react-navigation/native";
import React from "react";


const Stack = createStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen name="login" component={}

            </Stack.Navigator>


        </NavigationContainer>

    );

}