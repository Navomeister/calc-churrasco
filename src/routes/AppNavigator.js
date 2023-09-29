import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../Home/index.js';



const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false // Oculta a barra de navegação 
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
  
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;