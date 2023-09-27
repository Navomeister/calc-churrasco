import EscolhaCarnes from './src/Pages/EscolhaCarnes';
import EscolhaBebidas from './src/Pages/EscolhaBebidas';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Carnes' component={EscolhaCarnes}/>
        <Stack.Screen name='Bebidas' component={EscolhaBebidas}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
