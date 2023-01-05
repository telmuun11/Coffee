import React, {type PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// const Dummy = () => {
//   return <Text>duumy</Text>;
// };
const a = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Dummy} />
        <Stack.Screen name="EditPost" component={Dummy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
