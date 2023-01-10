import React, {type PropsWithChildren} from 'react';
import {Text, Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigation from './src/Navigation/BottomTabNavigation';

const Stack = createStackNavigator();
const Detail =({route}:any)=>{

  return <Text>{route.params.id}deh baraa</Text>
}
const App = () => {
  return (
<NavigationContainer>
<Stack.Navigator>
    <Stack.Screen name="Homescreen"  options={{ headerShown: false }} component={BottomTabNavigation} />
    <Stack.Screen name="Detail"  options={{ headerShown: false }} component={ Detail   } />

 
  </Stack.Navigator>
</NavigationContainer>

  );
};

export default App;
