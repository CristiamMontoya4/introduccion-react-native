import { useEffect, useState } from 'react';
import { getLatestGames } from '../../lib/metacritic';
import { Image, StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';
import Constants from 'expo-constants';
import { Main } from '../components/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';


//ScrollView, permite hacer scroll pero renderiza todos los elementos
//SafeAreaView detecta el espacio del status bar y solo sirve en ios

export default function() {

    return(
        <SafeAreaProvider>
            <View style={styles.container}>
                <Main />
            </View> 
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {  
        flex: 1,
        backgroundColor: '#111',
        alignItems: 'center',
        justifyContent: 'center',
    //  paddingTop: Constants.statusBarHeight, deja un espacio dependiendo del status bar, dependiendo del dispositivo
        paddingHorizontal: 12,
    },

});