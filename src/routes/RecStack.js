import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen    from '../Pages/PagReceitas/index.js';
import Asafrango from '../Receitas/asa_frango.js';
import yakisoba from '../Receitas/yakisoba.js';
import Frangocastanha from '../Receitas/frango_castanha.js';
import Salmaogrelhado from '../Receitas/salmao_grelhado.js';
import LomboPorco from '../Receitas/lombo_porco.js';


const Stack = createNativeStackNavigator();

function RecStack() {
  return (
      <Stack.Navigator initialRouteName="HomeRec"
      screenOptions={{
        headerShown: false // Oculta a barra de navegação (header)
      }}>
        <Stack.Screen name="HomeRec" component={HomeScreen} />
        <Stack.Screen name="Asa de Frango" component={Asafrango} />
        <Stack.Screen name="yakisoba" component={yakisoba} />
        <Stack.Screen name="Frango Castanha" component={Frangocastanha} />
        <Stack.Screen name="Salmao Grelhado" component={Salmaogrelhado} />
        <Stack.Screen name="Lombo de Porco" component={LomboPorco} />
      </Stack.Navigator>
  );
};

export default RecStack;