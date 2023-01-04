import React, {type PropsWithChildren} from 'react';

import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import data from '../mock_data';

interface dataType {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
  price: number;
}
const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.margin}>
      <Image style={styles.img2} source={require('../assets/img2.png')} />
      <Text style={styles.title}>Your Favorite</Text>
      <ScrollView>
        <FlatList
          data={data}
          renderItem={({item}: {item: dataType}) => (
            <View style={styles.box}>
              <Image style={styles.img} source={require('../assets/img1.png')} />

              <Text style={styles.title}>{item.title}</Text>
              <Text>${item.price}/spruce</Text>
            </View>
          )}
          horizontal={true}
        />
      </ScrollView>

      <Text>Homsssse</Text>

      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  margin: {
    marginLeft: 15,
  },

  highlight: {
    backgroundColor: 'blue',
    height: 1000,
  },
  box: {
    marginRight: 15,
    marginBottom: 40,
    height: 240,
    width: 160,
  },

  img: {
    width: 160,
    height: 180,
    borderRadius: 4,
    marginBottom: 9,
  },  
  img2: {
    width: 344,
    height: 205,
    borderRadius: 4,

  },
  title: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    color: '#2D2A2B',
    marginBottom: 4,
  },
  desc: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '300',
    color: '#2D2A2B',
  },
});
export default HomeScreen;
