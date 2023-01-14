import React, {useContext, useState, type PropsWithChildren} from 'react';

import {
  Text,
  Button,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  FlatList,
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native';
import data from '../../mock_data';
import {CardContext} from '../provider/bagContext';

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

const Detail = ({route, navigation}: any) => {
  const {list, setList} = useContext(CardContext);



  const iArr = [require('../assets/8oz.png'),require('../assets/12oz.png'),require('../assets/16oz.png'),require('../assets/20oz.png'),require('../assets/24oz.png')];



  const nArr = ['Small', 'Sprunce', 'Ceder', 'Redwood', 'Giant'];
  const [selected, setSelected] = useState(0);



  const Item = ({i}: {i: number}) => {
  //  let a ='../assets/' + iArr[i] + 'oz.png'
  console.log(i)
   return (
    <TouchableOpacity
    style={styles.cont}
    onPress={() => {
      setSelected(i);
    }}>
    <View style={selected == i ? styles.ChB : styles.not}>
      <View style={styles.box}>
        <Image
          style={styles.cofi}
          source={iArr[i]}
        />
        {/* <Image source={iArr[0].uri} /> */}
        <Text style={selected == i ? styles.Ch : styles.nCh}>{iArr[i]}</Text>
      </View>
    </View>
  </TouchableOpacity>
   )
  };

      const [chosen , setChosen] = useState("")

      const C1 = (children:any , txt:string  )=>{
        return<View>
          <Text  > {txt}</Text>
          <View>
            {children}
          </View>
        </View>
      }
  return (

    <View>
        <View style={styles.head}>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Image style={styles.imgb} source={require('../assets/back.png')} />
          </TouchableHighlight>
          <TouchableHighlight>
            <Image style={styles.imgb} source={require('../assets/back.png')} />
          </TouchableHighlight>
        </View>

      <View style={styles.bck}>
        <Image style={styles.img1} source={require('../assets/img1.png')} />
      </View>


      <Text style={styles.txt1}>Size options</Text>
      <View style={styles.brdr} />
      <FlatList
        data={iArr}
        renderItem={({index}: {index: any}) => <Item i={index} />}
        horizontal={true}
      />

      <Text style={[styles.txt1, styles.m50]}>Flavor options</Text>
      <View style={styles.brdr} />

      <View>

          <View>
              <Text></Text>
              <View>
                <Text>

                </Text>

                <View>
                  <TouchableHighlight><Image/></TouchableHighlight>
                  <Text></Text>
                  <TouchableHighlight><Image/></TouchableHighlight>
                </View>
              </View>
          </View>

      </View>
    </View>

  );
};
const styles = StyleSheet.create({
  // Y:{
  //   fontFamily:'Helvetica Neue',
  //   fontStyle:
  //   // font-family: 'Helvetica Neue';
  //   // font-style: normal;
  //   // font-weight: 400;
  //   // font-size: 12px;
  //   // line-height: 150%;
  //   // /* identical to box height, or 18px */
    
  //   // letter-spacing: 0.005em;
    
  //   // /* Primary */
    
  //   // color: #D3A762;
  // },
  // G:{

  // },
  not: {},
  ChB: {
    width: 64,
    height: 64,
    backgroundColor: '#f5ebda',
    borderWidth: 2,
    borderColor: '#D3A762',
    borderRadius: 50,
    paddingTop: 13,
    // marginRight:-10,
    marginTop: -14,
  },
  cont: {
    marginTop: 21,
  },
  cofi: {
    width: 48,
    height: 48,
    marginLeft: 20,
    marginBottom: 16,
    display: 'flex',
    marginRight: 19,
  },
  head: {
    position: 'absolute',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wWidth,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  imgb: {
    width: 40,
    height: 40,
    color: 'black',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 17,
  },
  brdr: {
    borderBottomWidth: 1,
    borderBottomColor: '#D3A762',
    opacity: 0.2,
    marginTop: 16,
  },
  m50: {
    marginTop: 50,
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
