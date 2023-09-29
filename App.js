import EscolhaCarnes from './src/Pages/EscolhaCarnes';
import EscolhaBebidas from './src/Pages/EscolhaBebidas';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Image, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Carnes' component={EscolhaCarnes} 
        options={{ headerLeft: () => (<Image style={styles.imagemLogo} source={require("./src/img/Logo.png")}/>), 
                   headerTitle: "", 
                   headerRight: () => (<Icon size={30} name="bars"/>), 
                   animation: 'slide_from_right'  }}/>
        <Stack.Screen name='Bebidas' component={EscolhaBebidas} 
        options={{ headerLeft: () => (<Image style={styles.imagemLogo} source={require("./src/img/Logo.png")}/>), 
                   headerTitle: "", 
                   headerRight: () => (<Icon size={30} name="bars"/>),
                   animation: 'slide_from_right' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  imagemLogo: {
    width: 100,
    height: 30,
  }
})

