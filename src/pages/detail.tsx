import React, {useContext, useState, type PropsWithChildren} from 'react';

import {
  Text,
  Button,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  FlatList
} from 'react-native';
import data from '../../mock_data';
import {CardContext} from '../provider/bagContext';

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

const Detail = ({route}: any) => {
  const {list, setList} = useContext(CardContext);

  const iArr = ["8", "12", "16", "20", "24"];
  const nArr = ['Small', 'Sprunce', 'Ceder', 'Redwood', 'Giant'];
  const [selected, setSelected] = useState(0);
  const Item = ({i}: {i: number}) => (


    <TouchableHighlight >
      <View style={selected == i ? styles.ChB : styles.not}>
        <View style={styles.box}>
          <Image style={styles.cofi} source={require("../assets/"+"24"+"oz.png")} />
          <Text style={selected == i ? styles.Ch : styles.nCh}>{iArr[i]}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <View style={styles.bck}>
        <Image style={styles.img1} source={require('../assets/img1.png')} />

      </View>
      <Text style={styles.txt1}>Size options</Text>

      <View style={styles.brdr} />

      <Text style={styles.txt1}>Flavor options</Text>
      <View style={styles.brdr} />

      <FlatList
              data={iArr}
              renderItem={({index}: { index:any}) => <Item  i={index} />}
              horizontal={true}
            />
    </View>
  );
};
const styles = StyleSheet.create({
  not: {

  },
  ChB:{
    width: 64,
    height: 64,
    backgroundColor:"#f5ebda",
    borderWidth:2,
    borderColor:"#D3A762",
    borderRadius:50,
    display:'flex',
    alignSelf:'center',

  },
  cofi: {
    width: 48,
    height: 48,
    marginLeft: 20,
    marginBottom: 16,
    display:'flex',
   
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignContent:'center'
  },
  m0: {
    marginHorizontal: 0,
  },
  nCh: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.5,
    textAlign: 'center',
    color: '#969495',
  },
  Ch: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.5,
    textAlign: 'center',
    color: '#2D2A2B',
  },
  txt1: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    color: 'black',
    letterSpacing: 0.0152,
  },
  brdr: {
    borderBottomWidth: 1,
    borderBottomColor: '#D3A762',
    opacity: 0.2,
  },
  img1: {
    top: -100,
    width: wWidth + 100,
    marginLeft: -50,
    height: wHeight / 3 + 100,
    resizeMode: 'contain',
  },
  bck: {
    width: wWidth,
    height: wHeight / 3,
    backgroundColor: '#1f3933',
  },
});

export default Detail;
