import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert, SafeAreaView} from 'react-native';
import Fontes from '../../Styles/Fontes';
import Fundos from '../../Styles/Fundos';
import ReturnSvg from '../../Components/ReturnSvg';
const Churrasco = ({navigation}) => {
  const [numAdultos, setNumAdultos] = useState("0");
  const [numCriancas, setNumCriancas] = useState("0");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.caixaTitulo}>
        <Text style={Fontes.tituloSecundaria}>Número de Participantes</Text>
      </View>
      <View style={styles.caixaDropdowns}>
        <View style={[styles.inputContainer, Fundos.fundoPrimario]}>
        <ReturnSvg svg={"Adulto"}/>
          <Text style={Fontes.tituloPrimaria}>Adultos:</Text>
          <TextInput
            style={[Fontes.tituloPrimaria, {width: "100%", paddingLeft: 10}]}
            onChangeText={setNumAdultos}
            keyboardType="numeric"
            value={numAdultos}
            maxLength={2}
          />
        </View>
        <View style={[styles.inputContainer, Fundos.fundoPrimario]}>
          <ReturnSvg svg={"Criança"}/>
          <Text style={Fontes.tituloPrimaria}>Crianças:</Text>
          <TextInput
            style={[Fontes.tituloPrimaria, {width: "100%", paddingLeft: 10}]}
            onChangeText={setNumCriancas}
            keyboardType="numeric"
            value={numCriancas}
            maxLength={2}
          />
        </View>
      </View>
      <View style={styles.caixaNavegacao}>
      <TouchableOpacity onPress={() => navigation.pop()} style={[styles.botoesNavegacao, Fundos.fundoTerciario]}>
            <Text style={Fontes.escritaPrimaria}>
                Voltar
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {(parseInt(numAdultos) + parseInt(numCriancas)) > 50 ? Alert.alert("Máximo de 50 pessoas.") : (navigation.navigate('Carnes', {adultos: numAdultos, criancas: numCriancas}))}} style={[styles.botoesNavegacao, Fundos.fundoTerciario]}>
            <Text style={Fontes.escritaPrimaria}>
                Próximo
            </Text>
        </TouchableOpacity>
      </View >
    </SafeAreaView>
  );
};

export default Churrasco;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  caixa: {
    width: 300,
  },

  caixaTitulo:{
    flex: 1,
    justifyContent: 'center',

  },

  caixaDropdowns: {
    flex: 3,
    paddingBottom: 10,
    width: 300,
  },

  caixaNavegacao: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 300,
    alignItems: 'center',
  },

  botoesNavegacao: {
    borderRadius: 5,
    width: 125,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
  },
});

