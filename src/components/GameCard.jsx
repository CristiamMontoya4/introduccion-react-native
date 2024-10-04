import { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, View } from "react-native";

export function GameCard({game}) {

    return(
        <View key={game.slug} style={styles.card}>
            <Image 
                source={{ uri: game.image }}
                style={styles.image}
            />
            <Text style={styles.score}>{game.score}</Text>
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.description}>{game.description}</Text>          
        </View>
    );
}

export function AnimatedGameCard({ game, index }){
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {  /**Esto dice como tiene que ser la animación */
            toValue: 1,   /*cambia el valor de la opacidad a 1 */
            duration: 500,  /*durante 500 ms */
            delay: index * 500,   /*con un retardo segun el indice, cuanto tiempo tarda en empezar*/
            useNativeDriver: true,  
        }).start();  /*el start es para iniciar la animación */
    }, [opacity, index] ); 

    return(
        <Animated.View style={{ opacity }}>
            <GameCard game={ game }/>
        </Animated.View>
    );
}


const styles = StyleSheet.create({
    card: {
        marginBottom: 20,
        padding: 10
    },
    image: {
        width: 187,
        height: 190,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 8,
        color: '#fff',
    },
    description: {
        fontSize: 16,
        color: '#eee',
    },
    score: {
        fontSize: 30,
        fontWeight: "bold",
        color: "green",
        marginTop: 10,
        marginRight: 'auto',
        paddingHorizontal: 6,
        borderRadius: 10,
        backgroundColor: '#222'
    }

});