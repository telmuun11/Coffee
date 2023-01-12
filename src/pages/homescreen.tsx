import React, {useState, type PropsWithChildren} from 'react';

import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Touchable,
  TouchableHighlight,

} from 'react-native';
import data from '../../mock_data';

interface dataType {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
  price: number;
}

const Item = ({item ,navigation}: {item: dataType, navigation :any}) => (
  <View style={styles.box}>
    <TouchableHighlight onPress={() => {navigation.navigate("Detail" , {id:item.id})}}>
    <Image 
      style={styles.img}
      source={require('../assets/img1.png')}
    />
    </TouchableHighlight>
  

    <Text style={styles.title}>{item.title}</Text>
    <Text>${item.price}/spruce</Text>
  </View>
)


const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;
const margin: number = (wWidth - 344) / 2;


const HomeScreen = ({navigation}: any) => {
  return (
    <View>


      <Image style={styles.img3} source={require('../assets/head.png')} />
      <View style={styles.nav}>
        <View style={styles.box1}>
          <Text style={styles.t1}>Pick-up store</Text>
          <Text style={styles.t2}>Barkley village * 0.5 mi</Text>
        </View>

        <Text style={styles.arrow}>{'>'}</Text>
      </View>

      <View style={styles.cont}>
        <ScrollView>
          <Image style={styles.img2} source={require('../assets/img2.png')} />
          <Text style={[styles.title, styles.f600]}>Your Favorite</Text>
          <ScrollView>

            <FlatList
              data={data}

              renderItem={({item}: {item: dataType}) => <Item navigation={navigation} item={item} />}
              horizontal={true}
            />

          </ScrollView>
          <Text style={[styles.title, styles.f600]}>Seasonal drinks</Text>
          <ScrollView>
            <FlatList
              data={data}
              renderItem={({item}: {item: dataType}) => <Item navigation={navigation} item={item} />}

              horizontal={true}
            />
          </ScrollView>

          <View style={styles.vug}></View>
        </ScrollView>
      </View>


    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    marginLeft: margin,
  },

  vug: {
    height: 300,
  },
  box: {
    marginRight: 15,
    marginBottom: 40,
    height: 240,
    width: 160,
  },
  w100: {
    width: '100%',
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
    marginTop: 28,
  },
  img3: {
    width: wWidth,
    resizeMode: 'contain',
    marginVertical: -80,
  },
  title: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    color: '#2D2A2B',
    fontWeight: '400',
    marginBottom: 18,
    marginTop: 24,
  },
  f600: {
    fontWeight: '700',
  },

  desc: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '300',
    color: '#2D2A2B',
  },
  t1: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: 0.04,
    opacity: 0.6,
  },

  t2: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 13,
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: 0.04,
    marginTop: 3,
  },
  arrow: {
    fontSize: 24,
    marginRight: margin,
    color: 'white',
    alignSelf: 'center',
  },
  nav: {
    height: 60,
    backgroundColor: '#2D2A2B',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box1: {
    display: 'flex',
    flexDirection: 'column',
    height: 32,
    marginLeft: margin,
    margin: 12,
  },
});
export default HomeScreen;
