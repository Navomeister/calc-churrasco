import React, { useState } from 'react';

import { View, Text, Image, Modal, TouchableOpacity, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import yakisoba from '../img/picanha.png';




function Yakisoba ( ) {
  
  const recipe = {

    title: 'Picanha Recheada',

    image: `${yakisoba}`,

    prepTime: '25 minutos',

    difficulty: 'Médio',

    servings: '6 porções pessoas',

    ingredients: [

      '1 peça de picanha',

      'Sal a gosto',

      'Pimenta-do-reino a gosto',

      '200g de queijo brie',

      '2 cebolas grandes fatiadas',

      '3 colheres de sopa de manteiga',

      '3 colheres de sopa de açúcar',

      '1/4 de xícara de vinho tinto seco',


    ],

    instructions: [

      'Faça um corte na lateral da picanha, formando um bolso.',

      'Tempere a picanha com sal e pimenta-do-reino a gosto.',

      'Dentro do bolso, coloque o queijo brie cortado em fatias.',

      'Pré-aqueça a churrasqueira em fogo médio-alto.',

      'Coloque a picanha na grelha da churrasqueira e deixe assar por cerca de 20 minutos de cada lado, ou até atingir o ponto desejado.',

      'Em uma frigideira, derreta a manteiga e adicione as cebolas fatiadas.',

      'Refogue as cebolas até ficarem macias e douradas.',

      'Adicione o açúcar e o vinho tinto seco, e deixe caramelizar.',

      'Retire a picanha da churrasqueira, deixe descansar por alguns minutos e fatie antes de servir.',

      'Sirva a picanha recheada acompanhada da cebola caramelizada.',

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

export default Yakisoba;