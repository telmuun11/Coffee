import React, {useContext, type PropsWithChildren} from 'react';
import {Text, Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigation from './src/Navigation/BottomTabNavigation';
import Detail from './src/pages/detail';
import {CardProvider} from './src/provider/bagContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <CardProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Homescreen"
            options={{headerShown: false}}
            component={BottomTabNavigation}
          />
          <Stack.Screen
            name="Detail"
            options={{headerShown: false}}
            component={Detail}
          />
        </Stack.Navigator>
      </CardProvider>
    </NavigationContainer>
  );
};

export default App;
