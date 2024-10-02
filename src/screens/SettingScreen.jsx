import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';  //importación para no pegarse con la barra superior de la hora y bateria

export default function SettingScreen(props) {

const {navigation} = props;

const goToPage = (pageName) => {
    navigation.navigate(pageName);
};

    return(
        <SafeAreaView>
            <Text>
                ⚙️⚙️⚙️ Estamos en la pantalla de settings ⚙️⚙️⚙️
            </Text>
            <Button onPress={()=>goToPage("Home")} title="Ir al Home" />
        </SafeAreaView>
    );
}