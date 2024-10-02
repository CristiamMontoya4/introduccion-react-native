import { View, Text, Button } from 'react-native';

export default function SettingScreen(props) {

const {navigation} = props;

const goToPage = (pageName) => {
    navigation.navigate(pageName);
};

    return(
        <View>
            <Text>
                ⚙️⚙️⚙️ Estamos en la pantalla de settings ⚙️⚙️⚙️
            </Text>
            <Button onPress={()=>goToPage("Home")} title="Ir al Home" />
        </View>
    );
}