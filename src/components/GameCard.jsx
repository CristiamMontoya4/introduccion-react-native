import { Image, Text, View } from "react-native";

export function GameCard({game}) {

    return(
        <View key={game.slug} style={styles.card}>
            <Image 
                source={{ uri: game.Image }}
                style={styles.image}
            />
            <Text style={styles.score}>{game.score}</Text>
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.description}>{game.description}</Text>          
        </View>
    );
}


const styles = StyleSheet.create({
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