import * as React from 'react';
import { Text, View, StyleSheet,Animated,ScrollView,FlatList } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7s',
    title: 'Third Item',
  },  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6q',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7f',
    title: 'Third Item',
  },  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6w',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7h',
    title: 'Third Item',
  },  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6e',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7j',
    title: 'Third Item',
  },  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bg',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6r',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7l',
    title: 'Third Item',
  },  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bl',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6y',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d70',
    title: 'Third Item',
  },  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bk',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6f',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bu',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7d',
    title: 'Third Item',
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
export default class App extends React.PureComponent {
    state = {
        indicator: new Animated.Value(0),
        wholeHeight: 1,
        visibleHeight: 0
    }
    
    render() {
        const indicatorSize = this.state.wholeHeight > this.state.visibleHeight ?
            this.state.visibleHeight * this.state.visibleHeight / this.state.wholeHeight :
            this.state.visibleHeight

        const difference = this.state.visibleHeight > indicatorSize ? this.state.visibleHeight - indicatorSize : 1
        return (
            <View >
             <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
                    onContentSizeChange={(width, height) => {
                        this.setState({ wholeHeight: height })
                    }}
                    onLayout={({ nativeEvent: { layout: { x, y, width, height } } }) => this.setState({ visibleHeight: height })}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.indicator } } }]
                    )}
      />
                

                <View style={styles.indicatorWrapper} />
                <Animated.View style={[
                    styles.indicator, {
                        height: indicatorSize,
                        transform: [{
                            translateY: Animated.multiply(this.state.indicator, this.state.visibleHeight / this.state.wholeHeight).interpolate({
                                inputRange: [0, difference],
                                outputRange: [0, difference],
                                extrapolate: 'clamp'
                            })
                        }]
                    }]} />

            </View>
        )
    }
}
const styles = StyleSheet.create({
  indicator:{position:"absolute",width:10,top:1,right:0,backgroundColor:"red"},
  container: {
    flex: 1,
   
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})