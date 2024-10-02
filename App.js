import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/LoginFom';
import Saludar from './src/components/Saludar';

export default function App() {

  //statusBar es una libreria externa de expo, que permite modificar la barra superior (donde esta la hora, batería, etc)
  //
  return (
    <NavigationContainer>
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
      </View>
    </NavigationContainer>
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
