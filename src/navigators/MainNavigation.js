import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {LandingScreen} from '../pages/LandingScreen';

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingScreen">
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{
            title: 'La Puta Computadora',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
