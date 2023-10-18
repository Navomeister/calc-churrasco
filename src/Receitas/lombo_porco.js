import React, { useState } from 'react';

import { View, Text, Image, Modal, TouchableOpacity, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import lombofoto from '../img/lomboporco.png';




function Lomboporco ( ) {
  
  const recipe = {

    title: 'Lombo de Porco com Molho de Laranja',

    image: lombofoto,

    prepTime: '1h',

    difficulty: 'Fácil',

    servings: '6 porções',

    ingredients: [

      'Lombo de porco',

      'Sal a gosto',

      'Pimenta-do-reino a gosto',

      '1 xícara de suco de laranja',

      '1/2 xícara de açúcar',

      '1/4 de xícara de vinagre de vinho branco',

      '1 colher de sopa de mostarda',

      '1 colher de sopa de molho inglês',

      '1 colher de sopa de alho em pó',

      '1 colher de sopa de cebola em pó',


    ],

    instructions: [

      'Tempere o lombo de porco com sal e pimenta-do-reino.',

      'Em uma tigela, misture o suco de laranja, açúcar, vinagre de vinho branco, mostarda, molho inglês, alho em pó e cebola em pó, formando o molho de laranja.',

      'Pré-aqueça a churrasqueira em fogo médio-alto.',

      'Coloque o lombo de porco na grelha da churrasqueira e deixe assar por cerca de 1 hora, virando de vez em quando e pincelando com o molho de laranja.',

      'Verifique o ponto da carne, ela deve estar macia e dourada.',

      'Retire o lombo de porco da churrasqueira, deixe descansar por alguns minutos e sirva quente.',

    ],

    assembly: '',

    additionalInfo: '',

    category: 'Porco'

  };




  const [modalVisible, setModalVisible] = useState(false);




  return (

      
    <ScrollView>
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

export default Lomboporco;
