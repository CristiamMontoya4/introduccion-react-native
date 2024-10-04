import {View, Text, TouchableHighlight, Button, StyleSheet, Pressable} from 'react-native';


//EN esta pantalla se hara unejemplo con varios componentes de react-native
export default function PruebaScreen() {


    return(
        <View style={styles.container}>
            <Text>Hola!</Text>
            <Button   //botón nativo
                title="Pulsa para alerta"
                onPress={()=> alert('Hola, del botón nativo')}
                style={{color:'red'}}
            />
            <TouchableHighlight  //Tambien esta el opacity, que no necesita underlay, solo se oscurece, los pressable más avanzado 
                underlayColor={"#09f"}  //color de atrás que se ve al presionar
                onPress={()=> alert('Hola, del botón personalizable')}
                style={{color:'red', width: 100, height: 50}}  //estilos desde cero
            >
                {/* Aquí adentro puede llevar lo que quiera */}
                <Text>Botón estilizable</Text>
            </TouchableHighlight>
            <Pressable
                onPress={() => {

                }}
                style={({pressed})=> [{
                    backgroundColor: pressed ? '#f33' : '#444'
                },
                styles.buttonPressed,
            ]}
            >
            {({pressed}) => (
                <Text style={{fontSize: pressed ? 32 : 16, color: 'white'}}>
                    {pressed ? 'Presionado' : 'Presioname!'}
                </Text>
            )}
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonPressed: {
        width: 200,
        height: 50,
        alignItems: 'center',
    }

});