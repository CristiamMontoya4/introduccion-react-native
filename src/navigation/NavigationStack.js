import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';

const Stack = createStackNavigator();

export default function NavigationStack() {
    //en stack navidator se establecen las pantllas sobre las cuales se va a navegar
    //en stack screen se establecen las pantallas por las que se puede navegar
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingScreen} />
        </Stack.Navigator>
    );
}