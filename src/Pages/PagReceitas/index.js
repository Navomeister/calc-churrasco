import { ImageBackground } from "react-native";
import { View, StatusBar, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native";

import asafrango from '../../img/asa.png'

import yakisoba from '../../img/picanha.png'
import frangocastanha from '../../img/frango_castanhas.png'
import salmaofoto from '../../img/salmao_grelhado.png'
import lombofoto from '../../img/lomboporco.png'

function HomeScreen({ navigation }) {
  const data = [
    { id: '1', title: 'Asa de Frango', photos: `${asafrango}`, subT: '11 ingredientes | 45 min', name: 'Asa de Frango' },
    { id: '2', title: 'Picanha Recheada', photos: `${yakisoba}`, subT: '15 ingredientes | 50 min', name: 'yakisoba'},
    { id: '3', title: 'Frango com Crosta de Castanhas', photos: `${frangocastanha}`, subT: '7 ingredientes | 6min', name: 'Frango Castanha' },
    { id: '4', title: 'Salmão Grelhado', photos: `${salmaofoto}`, subT: '7 ingredientes | 8 min', name: 'Salmao Grelhado' },
    { id: '5', title: 'Lombo de Porco ', photos: `${lombofoto}`, subT: '10 ingredientes | 1h', name: 'Lombo de Porco' },
  ];

  return (
    

    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <FlatList
        
        data={data}
        keyExtractor={(item) => item.id }
        showVerticalScrollIndicator={false}
        renderItem= { ({ item }) => (
          <View style={styles.item}>

           
            <TouchableOpacity onPress={() => navigation.navigate(`${item.name}`)}>
              <ImageBackground style={styles.imagemF}  source={item.photos}> 
                <Text style={styles.titulo}>{item.title}</Text>
                <Text style={styles.subtitulo}>{item.subT}</Text>
              </ImageBackground>

            </TouchableOpacity>
            
          </View>  
        )}
      />

    </View>

  )
}


const styles = StyleSheet.create({
  
    
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginTop: 13
    },
    
    logo: {
        width: 50,
        height: 50,
        flexDirection: "row",
        position: 'absolute',
        marginLeft: 20,
        marginTop: 10
    },
    
  item: {
      height: 200,
      marginTop: 15,
      marginBottom: 15
      
    },
    
    titulo: {
        marginTop: '42%',
        marginLeft: 30,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
        
    },
    
    subtitulo: {
        marginTop: 1,
        marginLeft: 30,
        color: '#fff',
        fontSize: 12
    },
    
    imagemF: {
        overflow: "hidden",
        height: 200,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    
}

});

export default HomeScreen;