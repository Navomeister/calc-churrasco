import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { View, Text, StyleSheet, Modal, SafeAreaView } from 'react-native';


export default function Lista({ navigation, route }){
  const {adultos, criancas, itens, bebidas} = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  // Determina quantidade a ser comprada
  const pessoasTotal = parseInt(adultos) + parseInt(criancas);
  
  const gramasAd = (500 / itens.length) * adultos;
  const gramasCri = (250 / itens.length) * criancas;
  const kgTotal = (gramasAd + gramasCri) / 1000;
  
  const carvaoTotal = 1.25 * kgTotal * itens.length;
  const descTotal = pessoasTotal * 4;
  
  var tiposBebidas = bebidas.length;
  var bebidasAlcool = 0;
  if (bebidas.includes("Cerveja", undefined)) {
      tiposBebidas -= 1;
      bebidasAlcool += 1;
  }

  if (bebidas.includes("Vinho", undefined)) {
      tiposBebidas -= 1;
      bebidasAlcool += 1;
    }
  
  const lPessoas = ((750 / tiposBebidas) * (pessoasTotal)) / 1000;
  const lAlcool = ((250 / bebidasAlcool) * (adultos)) / 1000;


  // determina o preço por convidado
  var precoTotal = 0;
  for (let i = 0; i < itens.length; i++) {
      switch (itens[i]) {
          case "Patinho":
              precoTotal += (kgTotal.toFixed(2) * 40.99);
              break;
      
          case "Coxão Duro":
              precoTotal += (kgTotal.toFixed(2) * 27.99);
              break;
      
          case "Maminha":
              precoTotal += (kgTotal.toFixed(2) * 27.99);
              break;
      
          case "Asa":
              precoTotal += (kgTotal.toFixed(2) * 18.89);
              break;
      
          case "Coração":
              precoTotal += (kgTotal.toFixed(2) * 29.90);
              break;
      
          case "Peito":
              precoTotal += (kgTotal.toFixed(2) * 12.49);
              break;
      
          case "Costela":
              precoTotal += (kgTotal.toFixed(2) * 49.00);
              break;
      
          case "Linguiça":
              precoTotal += (kgTotal.toFixed(2) * 33.99);
              break;
      
          case "Lombo":
              precoTotal += (kgTotal.toFixed(2) * 29.99);
              break;
      
          case "Pão de Alho":
              precoTotal += (kgTotal.toFixed(2) * 29.95);
              break;
      
          case "Queijo Coalho":
              precoTotal += (kgTotal.toFixed(2) * 65.90);
              break;
      
          default:
              break;
      };
  }

  for (let i = 0; i < bebidas.length; i++) {
      switch (bebidas[i]) {
          case "Suco":
              precoTotal += (lPessoas * 10);
              break;
      
          case "Cerveja":
              precoTotal += (lAlcool * 10);
              break;
      
          case "Vinho":
              precoTotal += (lAlcool * 14.90);
              break;
      
          case "Agua":
              precoTotal += (lPessoas * 4.84);
              break;
      
          default:
              break;
      };
      
  }

  const precoPorAdulto = (precoTotal / adultos).toFixed(2);

  var maxLista = 7;

  return (
    
    <SafeAreaView style={styles.container}>
    <StatusBar style="auto" />
      <Text style={styles.title}>{pessoasTotal} convidados</Text>
      <View style={styles.detalhes}>
        <View style={styles.detalhes_carnes}>
          <Text style={styles.carnes}>Carnes</Text>

          <View>
            <FlatList
              data={itens}
              renderItem={({item}) => {
                if (maxLista > 0) {
                  maxLista -= 1;
                  return(
                    <View style={styles.carne1}>
                      <Text style={styles.carnes1}>{item}</Text>
                      <Text style={styles.carnes1}>{kgTotal.toFixed(2)} Kg</Text>
                    </View>
                  )
                }
              }}
            />
          </View>

        </View>
        <View style={styles.separator} />
        <View style={styles.detalhes_bebidas}>
          <Text style={styles.bebidas}>Bebidas</Text>
          <FlatList
                    data={bebidas}
                    renderItem={({item}) => (
                        <View style={styles.bebida2}>
                          <Text style={styles.bebidas1}>{item}</Text>
                          <Text style={styles.bebidas1}>{item == "Vinho" || item == "Cerveja" ? lAlcool.toFixed(2) : lPessoas.toFixed(2)} L</Text>
                        </View>
                    )}
                  />
        </View>
        <View style={styles.separator2} />

        <TouchableOpacity onPress={() => setModalVisible(true)} style={{ width: '100%' }}>

          <View



            style={{

              borderRadius: 5,

              marginBottom: 10,

              width: '100%',

            }}

          >

            <Text style={{ height: 38, borderRadius: 5, color: 'red', fontWeight: 'bold', fontSize: 20 }}>

              ...

            </Text>

          </View>

        </TouchableOpacity>






      </View>

      <View style={styles.buttons}>
        <View style={styles.buttonsNavegacao}>
          <View style={styles.b1}>
            <TouchableOpacity onPress={() => navigation.pop()} style={styles.buttonsVoltar}>
              <Text style={styles.buttonAnterior}>Voltar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.b2}>
            <TouchableOpacity onPress={() => navigation.navigate('Formchurrasco', {preco: precoPorAdulto})} style={styles.buttonsProximos}>
              <Text style={styles.buttonProximo}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Modal

        visible={modalVisible}

        animationType="slide"

        transparent={true}

        onRequestClose={() => setModalVisible(false)}

      >

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', }}>

          <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 20, width: '100%', height: '90%', }}>

            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Lista</Text>

            <View>

              <View style={{ backgroundColor: '#fff', borderRadius: 5, marginBottom: 5, height: '80%', padding: 20,}}>

                <View style={styles.detalhes_carnes}>
                  <Text style={styles.carnes}>Carnes</Text>

                  <View style={{height: 150}}>
                    <FlatList
                      data={itens}
                      scrollable ={true}
                      renderItem={({item}) => (
                        <View style={styles.carne1}>
                          <Text style={styles.carnes1}>{item}</Text>
                          <Text style={styles.carnes1}>{kgTotal.toFixed(2)} Kg</Text>
                        </View>
                      )}
                    />
                  </View>

                </View>

                <View style={styles.separator1} />

                <View style={styles.detalhes_bebidas}>
                  <Text style={styles.bebidas}>Bebidas</Text>
                  <FlatList
                    data={bebidas}
                    renderItem={({item}) => (
                      <View style={styles.bebida2}>
                        <Text style={styles.bebidas1}>{item}</Text>
                        <Text style={styles.bebidas1}>{item == "Vinho" || item == "Cerveja" ? lAlcool.toFixed(2) : lPessoas.toFixed(2)} L</Text>
                      </View>
                    )}
                  />
                </View>

                <View style={styles.separator2} />

                <View style={styles.detalhes_complementos}>
                  <Text style={styles.title_complemento}>Complementos</Text>
                  <View  style={styles.detalhes_comp}>
                    <Text style={styles.complemento}>Carvão</Text>
                    <Text style={styles.complemento}>{carvaoTotal.toFixed(2)} Kg</Text>
                  </View>
                  <View  style={styles.detalhes_comp}>
                    <Text style={styles.complemento}>Descartáveis</Text>
                    <Text style={styles.complemento}>{descTotal} Pares</Text>
                  </View>
                </View>

              </View>


            </View>

            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 20 }}>

              <Text style={{ fontSize: 16, color: 'red', textAlign: 'center' }}>Fechar</Text>

            </TouchableOpacity>

          </View>

        </View >

      </Modal >

    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    // Sombras para dispositivos iOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    
  },
  detalhes: {
    paddingLeft: 20,
    paddingRight: 20,
    width: 350,
    height: 'auto',
    borderWidth: 2,
    flex: 3
    // marginBottom: 120,
   
  },
  detalhes_carnes: {
    height: 'auto',
    marginBottom: 10,
    paddingRight: 10,
    
  },
  detalhes_complementos: {
    height: 'auto',
    paddingRight: 10,
    paddingLeft: 20,
    backgroundColor: '#fff',
  },
  carnes: {
    fontSize: 17,
    fontWeight: '700',
    color: 'red',
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,

  },
  detalhes_bebidas: {
    paddingRight: 10,
  },
  bebida1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  bebida2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  bebida3: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  bebidas: {
    color: 'red',
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 10,
  },
  separator: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 10,
    height: 2,
    backgroundColor: 'black',
  },
  separator1: {
    width: '100%',
    justifyContent: 'center',
    height: 2,
    backgroundColor: 'black',
  },
  separator2: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 15,
    height: 2,
    backgroundColor: 'black',
  },
  carne1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  carne2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  carne3: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  carnes1: {
    marginLeft: 20,
  },
  bebidas1: {
    marginLeft: 20,
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
    fontSize: 16,
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
    borderRadius: 5,
    width: 125,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsNavegacao: {
    display: 'flex',
    flexDirection: 'row',
    height: 45,
    width: 300,
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  buttons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    
  },
  title_complemento: {
    fontSize: 17,
    fontWeight: '700',
    color: 'red',
    marginTop: 15,
    marginBottom: 10,
  },
  detalhes_comp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  }
});

