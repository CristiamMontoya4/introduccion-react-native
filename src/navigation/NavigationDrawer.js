import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import PruebaScreen from '../screens/PruebasScreen';
import PeliculasScreen from '../screens/PeliculasScreen';

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Settings" component={SettingScreen} />
            <Drawer.Screen name="Prueba" component={PruebaScreen} />
            <Drawer.Screen name="Peliculas" component={PeliculasScreen} />
        </Drawer.Navigator>
    );
}