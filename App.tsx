

import React, {type PropsWithChildren} from 'react';
import {Text,Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import HomeScreen from './src/pages/homescreen';

const BottomTab = createBottomTabNavigator();


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
          name="Cart"
          options={{
            headerShown: false,
          }}
          component={HomeScreen}
        />
        <BottomTab.Screen
          name="Settings"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
