import { useEffect, useState } from 'react';
import { getLatestGames } from '../../lib/metacritic';
import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Image, StyleSheet, Text, S, SafeAreaView, ScrollView } from 'react-native';


//ScrollView, permite hacer scroll pero renderiza todos los elementos
//SafeAreaView detecta el espacio del status bar y solo sirve en ios

export default function() {

    const [games, setGames] = useState([]);

    useEffect(()=>{
        getLatestGames().then(games => {
            setGames(games);
        })
    }, []);

    return(
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView style={{ margin: 12 }}>
                    <Text>Peliculas</Text>
                    {games.map(game => (
                        <View key={game.slug} style={styles.card}>
                            <Image 
                                source={{ uri: game.Image }}
                                style={styles.image}
                            />
                            <Text style={styles.score}>{game.score}</Text>
                            <Text style={styles.title}>{game.title}</Text>
                            <Text style={styles.description}>{game.description}</Text>          
                        </View>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {  
        flex: 1,
        backgroundColor: '#111',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: 'orange',
        marginBottom: 10,
    },
    image: {
        width: 187,
        height: 147,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: '#fff',
    },
    description: {
        fontSize: 16,
        color: '#eee',
    },
    score: {
        fontSize: 16,
        fontWeight: "bold",
        color: "green",
        marginTop: 10,
    }

});