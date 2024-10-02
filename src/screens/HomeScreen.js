import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import LoginForm from '../components/LoginFom';
import Saludar from '../components/Saludar';
import { SafeAreaView } from 'react-native-safe-area-context';  //importación para no pegarse con la barra superior de la hora y bateria

export default function HomeScreen({ navigation }) {

    const { navigate } = navigation;

    const goToSettings = () => {
        navigate("Settings")  //guarda el nombre de la screen a navegar
    }

      //statusBar es una libreria externa de expo, que permite modificar la barra superior (donde esta la hora, batería, etc)
    return(
        <SafeAreaView>
            <Text>
                Estamos en el Home 🏠
            </Text>
           <Button onPress={goToSettings} title="Ir a Settings" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  //Componentes para agregar al home
  /*
   <View style={styles.container}>
                <StatusBar style="light" />
                <Image source={{ uri: "https://es.mypet.com/wp-content/uploads/sites/23/2021/03/GettyImages-623368750-e1582816063521-1.jpg" }} style={{
                    width: 200,   //el tamaño es obligatorio, cuando se trae de internet
                    height: 200,
                }} />
                <Text style={{ color: 'white' }}>Open up App.js to start working on your app! 😺💸</Text>
                <LoginForm />
                <Saludar firstName="Cristiam" lastname="Montoya" />
                <Saludar />
                <Button onPress={goToPage} title="Ir a ajustes" />
            </View>
*/