import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Pages/Home/index.js';


const Stack = createNativeStackNavigator();

function NavHome() {
  return (
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false // Oculta a barra de navegação 
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
  
      </Stack.Navigator>
  );
};

export default NavHome;