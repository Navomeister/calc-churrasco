import React, { useState } from 'react';

import { View, Text, Image, Modal, TouchableOpacity, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import asafrango from '../img/asa.png';



function Escondidinhocarne ( ) {
  
  const recipe = {

    title: 'Asa de Frango',

    image: asafrango,

    prepTime: '30 minutos',

    difficulty: 'fácil',

    servings: '4 porções',

    ingredients: [

      '1 kg de asa de frango',

      'Sal a gosto',

      'Pimenta-do-reino a gosto',

      '3 dentes de alho picados',

      'Suco de 2 limões',

      '1/4 de xícara de molho de soja',

      '2 colheres de sopa de mel',

      '1 colher de sopa de páprica',

    ],

    instructions: [

      'Tempere as asas de frango com sal, pimenta-do-reino, alho picado, suco de limão, molho de soja, mel e páprica.',
     

      'Deixe as asas marinando na geladeira por pelo menos 2 horas, virando de vez em quando.',
      

      'Pré-aqueça a churrasqueira em fogo médio-alto.',

      'Coloque as asas na grelha da churrasqueira e deixe assar por cerca de 25 a 30 minutos, virando-as para dourar todos os lados.',

      'Verifique o ponto das asas de frango e retire-as da churrasqueira.',
     
      'Sirva quente como petisco ou acompanhamento.',
    ],

    assembly: '',

    additionalInfo: '',

    category: 'Carne'

  };




  const [modalVisible, setModalVisible] = useState(false);




  return (

      
    <ScrollView >

      <View style={{ flex: 1, alignItems: 'flex-start', paddingHorizontal: 20 }}>

        <Image

          source={recipe.image}

          style={{

            width: '100%',

            height: 200,

            marginBottom: 20,

            resizeMode: 'cover',

            borderRadius: 5,

          }}

        />




        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'left', marginBottom: 10 }}>

          {recipe.title}

        </Text>




        <TouchableOpacity onPress={() => setModalVisible(true)} style={{ width: '100%' }}>

          <LinearGradient

            colors={['#CD0000', '#CD0000']}

            style={{

              borderRadius: 5,

              marginBottom: 10,

              width: '100%',

            }}

          >

            <Text style={{ backgroundColor: 'transparent', height: 38, padding: 8, borderRadius: 5, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>

              Ver Ingredientes

            </Text>

          </LinearGradient>

        </TouchableOpacity>




        <LinearGradient

          colors={['#CD0000', '#CD0000']}

          style={{

            borderRadius: 5,

            marginBottom: 10,

            width: '100%',

          }}

        >

          <Text style={{ backgroundColor: 'transparent', height: 38, padding: 8, borderRadius: 5, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>

            Dificuldade: {recipe.difficulty}

          </Text>

        </LinearGradient>




        <LinearGradient

          colors={['#CD0000', '#CD0000']}

          style={{

            borderRadius: 5,

            marginBottom: 10,

            width: '100%',

          }}

        >

          <Text style={{ backgroundColor: 'transparent', height: 38, padding: 8, borderRadius: 5, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>

            Modo de preparo:

          </Text>

        </LinearGradient>




        {recipe.instructions.map((instruction, index) => (

          <Text key={index} style={{ marginBottom: 20 }}>

            <Text style={{ fontWeight: 'bold' }}>{`${index + 1}. `}</Text>

            {instruction}

          </Text>

        ))}




        {recipe.assembly && <Text style={{ marginBottom: 20 }}>Montagem: {recipe.assembly}</Text>}

        {recipe.additionalInfo && <Text style={{ marginBottom: 20 }}>Informações adicionais: {recipe.additionalInfo}</Text>}




        <LinearGradient

          colors={['#CD0000', '#CD0000']}

          style={{

            borderRadius: 5,

            marginBottom: 10,

            width: '100%',

          }}

        >

          <Text style={{ backgroundColor: 'transparent', height: 38, padding: 10, borderRadius: 5, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>

            Categoria: {recipe.category}

          </Text>

        </LinearGradient>




        <Modal

          visible={modalVisible}

          animationType="slide"

          transparent={true}

          onRequestClose={() => setModalVisible(false)}

        >

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

            <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20 }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Ingredientes ({recipe.ingredients.length})</Text>

              <ScrollView>

                {recipe.ingredients.map((ingredient, index) => (

                  <View key={index} style={{ backgroundColor: '#CD0000', borderRadius: 10, marginBottom: 10 }}>

                    <Text style={{ fontSize: 18, padding: 10, color:'white' }}>

                      <Text style={{ fontWeight: 'bold' }}>{index + 1}.   </Text> {ingredient}

                    </Text>

                  </View>

                ))}

              </ScrollView>

              <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 20 }}>

                <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight:'bold',  }}>Fechar</Text>

              </TouchableOpacity>

            </View>

          </View>

        </Modal>

      </View>

    </ScrollView>

  );

};

export default Escondidinhocarne;
