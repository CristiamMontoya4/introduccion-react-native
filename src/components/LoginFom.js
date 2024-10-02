import {TextInput, Button, Text, View} from "react-native"

export default function LoginForm() {

    return(
        <View>
            <Text style={{color: 'red' }}>Login</Text>
            <TextInput placeholder="Email" style={{color: 'red', borderColor: 'red', backgroundColor: 'white', width:200, height: 50 }}/>
            <TextInput placeholder="Contraseña" style={{color: 'red', borderColor: 'red', backgroundColor: 'white', width:200, height: 50 }}/>
            <Button title="Enviar" onPress={() => console.log("Enviado")} />
        </View>
    );
}