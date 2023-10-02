import Home from './src/Pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalMenu from './src/Components/ModalMenu';
import { useState } from 'react';
import NavHome from './src/routes/HomeStack';
import CalcStack from './src/routes/CalcStack';
import RecStack from './src/routes/RecStack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeStack'
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
          <Stack.Screen name="HomeStack" component={NavHome} options={{headerShown: false}} />
          
          <Stack.Screen name='Home2' component={Home}/>

          <Stack.Screen name='Receitas' component={RecStack}/>

          <Stack.Screen name='Calculadora' component={CalcStack}/>
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

