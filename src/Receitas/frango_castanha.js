import React, { useState } from 'react';

import { View, Text, Image, Modal, TouchableOpacity, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import frangocastanha from '../img/frango_castanhas.png';




function Frangocastanha ( ) {
  
  const recipe = {

    title: 'Frango com Crosta de Castanhas',

    image: `${frangocastanha}`,

    prepTime: '1h 30 minutos',

    difficulty: 'Fácil',

    servings: '4 porções',

    ingredients: [

      '4 filés de frango',

      'Sal a gosto',

      'Pimenta-do-reino a gosto',

      '1 xícara de castanhas trituradas',

      '1/2 xícara de farinha de rosca',

      '2 ovos batidos',

      ' 2 colheres de sopa de manteiga derretida',

    ],

    instructions: [

      'Tempere os filés de frango com sal e pimenta-do-reino.',

      'Em um prato, misture as castanhas trituradas e a farinha de rosca, formando a crosta de castanhas.',

      'Passe os filés de frango nos ovos batidos e depois na crosta de castanhas, pressionando para aderir bem.',

      'Pré-aqueça a churrasqueira em fogo médio-alto.',

      'Coloque os filés de frango na grelha da churrasqueira e deixe grelhar por cerca de 6 minutos de cada lado, ou até ficarem dourados e cozidos.',

      'Retire os filés de frango da churrasqueira, deixe descansar por alguns minutos e sirva quente.',
    
    ],

    assembly: '',

    additionalInfo: '',

    category: 'Frango'

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

export default Frangocastanha;