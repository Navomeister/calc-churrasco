import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, handlePress } from 'react-native';
import { StatusBar } from "expo-status-bar";

function TelaInicial({navigation}) {
  return (
    <ImageBackground
      source={require('../img/fundo.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.texto}>O seu churrasco de uma </Text>
        <Text style={styles.texto}>forma como você nunca   </Text>
        <Text style={styles.texto}>experimentou antes!!! </Text>


        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Home2")}>
          <Text style={styles.textoBotao}>Próximo</Text>
        </TouchableOpacity>
       
       
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImage: {
    flex: 1, // ocupa toda a tela (altura)
    width: 411,
    justifyContent: 'center',
  },

  texto: {
    color: '#fff', // Cor do texto
    fontSize: 20, // Tamanho da fonte
    textShadowColor: '#000', // Cor do contorno do texto
    textShadowOffset: { width: 1, height: 1 }, // Largura e altura do contorno
    textShadowRadius: 2, // Raio do contorno
    fontWeight: '600', // Espessura da fonte (semi-bold)
  },

  botao: {
    backgroundColor: '#C71111',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    position: 'absolute', // Define a posição absoluta
    bottom: 50, // Posiciona na parte inferior
    right: 0, // Posiciona à direita
    margin: 20, // Adiciona margem para evitar que o botão fique muito colado às bordas
      
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16, //tamanho da fonte
    fontWeight: '600', // semi-bold
  },
  
});


export default TelaInicial;
