/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const Hs =()=>{
  return <Text>lalal</Text>
}
const HomeScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>Homsssse</Text>
      <NavigationContainer independent={true}>

       <TopTab.Navigator>
         <TopTab.Screen name="Hs" component={Hs} />

        </TopTab.Navigator>
        </NavigationContainer>


      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>

      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}

      />
    </View>
  );
};
const SettingsScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>settingd</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={HomeScreen}
        />
        <BottomTab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    backgroundColor: 'blue',
    height: 1000,
  },
});

export default App;

// const Section: React.FC<
//   PropsWithChildren<{
//     title: string;
//   }>
// > = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };
