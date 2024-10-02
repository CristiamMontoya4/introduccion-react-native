import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://es.mypet.com/wp-content/uploads/sites/23/2021/03/GettyImages-623368750-e1582816063521-1.jpg" }} style={{
          width: 100, 
          height: 100,
      }} />
      <Text>Open up App.js to start working on your app! 😺💸</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
