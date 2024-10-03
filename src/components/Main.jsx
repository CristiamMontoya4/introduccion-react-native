import { useEffect, useState } from 'react';
import { getLatestGames } from '../../lib/metacritic';
import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Image, StyleSheet, Text, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GameCard } from './GameCard';


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

    return(
        <View style={{paddingTop: insets.top, padding: insets.bottom}}> {/* los insets permite usar los espacios seguros, osea no pegar con la barra superior ni la inferior*/}
            
                <Text>Peliculas</Text>
                {game.length === 0 ?  (
                    <ActivityIndicator color={"#fff"} size={"large"} />
                )  :  (
                    <ScrollView style={{ margin: 12 }}>
                        {games.map((game) => <GameCard key={game.slug} game={game} /> )}
                    </ScrollView>
                )
                }
        </View> 
    );
}

