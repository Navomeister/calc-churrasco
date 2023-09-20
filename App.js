import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Checked from './src/svg/Checked';
import Porco from './src/svg/Porco';
import Unchecked from './src/svg/Unchecked';


export default function App() {
  const [teste, setTeste] = useState(["a", "Teste"]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      {/* Botão */}
      <TouchableOpacity onPress={() => {teste.includes("Teste", undefined) ? setTeste(teste.filter((i) => i != "Teste" )) : setTeste(teste.concat("Teste"))}}>
        {teste.includes("Teste", undefined) ? <Checked/> : <Unchecked/>}
        <Text>
          {teste}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
