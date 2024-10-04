import { useEffect, useState } from 'react';
import { getLatestGames } from '../../lib/metacritic';
import { Image, StyleSheet, Text, SafeAreaView, ScrollView, ActivityIndicator, FlatList, View } from 'react-native';
import Constants from 'expo-constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCard } from './GameCard';
import { LogoMetacritic } from './LogoMetacritic';


//ScrollView, permite hacer scroll pero renderiza todos los elementos
//SafeAreaView detecta el espacio del status bar y solo sirve en ios

export function Main() {

    const [games, setGames] = useState([]);
    const insets = useSafeAreaInsets();

    useEffect(()=>{
        getLatestGames().then(games => {
            setGames(games);
        })
    }, []);

    /* los insets permite usar los espacios seguros, osea no pegar con la barra superior ni la inferior*/
    return(
        <View style={{paddingTop: insets.top, padding: insets.bottom}}>
            <View style={{marginBottom: 10, marginTop: 20}}>
                <LogoMetacritic />
            </View>
            <Text style={styles.text}>Videojuegos</Text>
            {games.length === 0 ?  (
                <ActivityIndicator color={"#fff"} size={"large"} />
            )  :  (
                <>
                    {/*Ideal para renderizar scroll, no usa children */}
                    {/*  {games.map((game) => <GameCard key={game.slug} game={game} /> )}  flat list no necesita este map*/}
                    <FlatList 
                        data={games}
                        keyExtractor={(game)=> game.slug}
                        renderItem={({ item, index }) => (<AnimatedGameCard game={item} index={index} />)}
                    /> 
                </>
            )
            }
        </View> 
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'white',
        marginBottom: 10,
        justifyContent: 'center'
    }
});

