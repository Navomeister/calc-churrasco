import EscolhaCarnes from './src/Pages/EscolhaCarnes';
import EscolhaBebidas from './src/Pages/EscolhaBebidas';
import Home from './src/Pages/Home';
import Teste from './src/Pages/Teste';
import Teste2 from './src/Pages/Teste2';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalMenu from './src/Components/ModalMenu';
import { useState } from 'react';
import HomeScreen from './src/Pages/Home/index';

const Stack = createNativeStackNavigator();

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
                         screenOptions={({route, navigation}) => 
                                      ({ headerLeft: () => (<Image style={styles.imagemLogo} source={require("./src/img/Logo.png")}/>), 
                                         headerTitle: "", 
                                         headerRight: () => (
                                         <View>
                                           <Icon size={30} name="bars" onPress={() => setModalVisible(true)}/>
                                           <ModalMenu navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
                                         </View>
                                         ), 
                                         animation: 'slide_from_right'  })}>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
          
          <Stack.Screen name='Home2' component={Home}/>

          <Stack.Screen name='Teste' component={Teste}/>
          <Stack.Screen name='Teste2' component={Teste2}/>

          <Stack.Screen name='Carnes' component={EscolhaCarnes}/>
          <Stack.Screen name='Bebidas' component={EscolhaBebidas}/>
        </Stack.Navigator>
        
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  imagemLogo: {
    width: 100,
    height: 30,
  },
  modal: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    margin: 0,
    marginLeft: 150,
  },

})

