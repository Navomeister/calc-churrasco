import Churrasco from '../Pages/Calculadora/EscolhaParticipantes';
import EscolhaCarnes from '../Pages/Calculadora/EscolhaCarnes';
import EscolhaBebidas from '../Pages/Calculadora/EscolhaBebidas';
import Lista from '../Pages/Calculadora/Lista';
import Form from '../Pages/Calculadora/Form';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function CalcStack() {
  return(
        <Stack.Navigator initialRouteName='Pessoas'
        screenOptions={{
            headerShown: false, // Oculta a barra de navegação (header)
            animation: 'slide_from_right'
          }}>
          <Stack.Screen name='Pessoas' component={Churrasco}/>
          <Stack.Screen name='Carnes' component={EscolhaCarnes}/>
          <Stack.Screen name='Bebidas' component={EscolhaBebidas}/>
          <Stack.Screen name='Listachurrasco' component={Lista}/>
          <Stack.Screen name='Formchurrasco' component={Form}/>
          
        </Stack.Navigator>
  );
}
