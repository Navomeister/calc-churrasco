import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import TelaInicial from './TelaInicial'; // 2ª tela
import { StatusBar } from "expo-status-bar";

function HomeScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(true);
  const [showTelaInicial, setShowTelaInicial] = useState(false);

  useEffect(() => {
    // atraso de 2 segundos para a tela de carregamento ir para a tela inicial
    setTimeout(() => {
      setIsLoading(false); // Mudando o estado para mostrar a tela inicial
    }, 2000);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setShowTelaInicial(true);
    }
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isLoading ? (
        <View style={styles.loading}>
          <Image style={styles.logo} source={require('../../img/Logo.png')} />
          <BallIndicator color="#0000ff" size={50} count={8} />
        </View>
      ) : (
        showTelaInicial && <TelaInicial navigation={navigation} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    marginTop: 310,
    width: 350,
    height: 110,
  },

 
});

export default HomeScreen;
