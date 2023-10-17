import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Share, Alert} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Mapa from '../../Components/mapa';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Form({ navigation, route }) {
  const [endereco, setEndereco] = useState('');
  const {preco} = route.params;
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [date, setDate] = useState('');

  // const handleSubmit = () => {
  //   // Aqui você pode adicionar a lógica para o envio do formulário
  //   console.log('Endereço:', endereco);
  //   console.log('Dia:', date);
  //   console.log('Preço:', String(preco).replace('.', ','));
  //   console.log('Nome:', nome);
  //   console.log('Número:', numero);
  // };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Endereço: ${endereco}\nData: ${date}\nPreço: R$${String(preco).replace('.', ',')}\nNome: ${nome}\nNúmero: ${numero}`,
      });

      if (result.action === Share.sharedAction) {
        // Compartilhado com sucesso
      } else if (result.action === Share.dismissedAction) {
        // Compartilhamento cancelado
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={{ flex: 1, padding: 50, display: 'flex', justifyContent: 'space-between' }}>
      <StatusBar style="auto" />
      <View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: -20 }}>
          <TextInput
            placeholder="Input Endereço"
            placeholderTextColor="black"
            value={endereco}
            onChangeText={setEndereco}
            style={{
              borderBottomWidth: 1, width: 250, padding: 0, borderColor: 'black', textAlign: 'center', marginBottom: 90
            }}
          />
        </View>
        
        <SafeAreaView style={{ flex: 1, marginBottom: 150 }}>
          <Mapa />
        </SafeAreaView>

        <View style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', alignItems: 'center', marginBottom: 10 }}>
          <Text style={{ fontWeight: '700' }}>Data: </Text>
          <TextInputMask
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            placeholder="__/__/____"
            style={{ fontWeight: '700' }}
            placeholderTextColor="black"
            keyboardType="numeric"
            value={date}
            onChangeText={(formatted, extracted) => {
              setDate(formatted);
            }}
          />
        </View>
        
        <View style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', alignItems: 'center', marginBottom: 15 }}>
          <Text style={{ fontWeight: '700' }}>Preço por Pessoa: R${String(preco).replace('.', ',')}</Text>
        </View>

        <View>
          <Text style={{ fontWeight: '700', marginBottom: 10 }}>Informações de Contato:</Text>

          <View style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ fontWeight: '700' }}>Nome:</Text>
            <TextInput
              value={nome}
              onChangeText={setNome}
              style={{
                borderBottomWidth: 1, width: 220, borderColor: 'black'
              }}
            />
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: '700' }}>Número:</Text>
            <TextInputMask
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
              }}
              keyboardType="numeric"
              value={numero}
              onChangeText={setNumero}
              style={{
                borderBottomWidth: 1, width: 110, justifyContent: 'center', borderColor: 'black'
              }}
            />
          </View>
        </View>
      </View>

      <View style={styles.buttons}>
        <View>
          <TouchableOpacity onPress={onShare} style={styles.confirmButton}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsNavegacao}>
          <View style={styles.b1}>
            <TouchableOpacity onPress={() => navigation.pop()} style={styles.buttonsVoltar}>
              <Text style={styles.buttonAnterior}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  confirmButton: {
    backgroundColor: '#CD0000',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonProximo: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonAnterior: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonsVoltar: {
    backgroundColor: '#E51B23',
    borderRadius: 5,
    width: 125,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsProximos: {
    backgroundColor: '#E51B23',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 130,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsNavegacao: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'flex-start',
    width: 300
  },
  map: {
    width: 300,
    height: 200,
    marginBottom: 30,
  }
});