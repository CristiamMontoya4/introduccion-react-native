import { createBottomTabNavigator } from "@react-navigation/bottom-tabs" 
import SettingScreen from "../screens/SettingScreen";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

//Navegación alternativa, usando botones en la parte inferior
export default function NavigationTab() {

    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
    );
}