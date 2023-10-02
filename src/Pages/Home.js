import { TouchableOpacity, SafeAreaView, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Fundos from "../Styles/Fundos";


export default function Teste({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <TouchableOpacity style={[styles.botoesNavegacao, Fundos.fundoTerciario]} onPress={() => navigation.navigate("Calculadora")}><Text>Calculadora</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.botoesNavegacao, Fundos.fundoTerciario]} onPress={() => navigation.navigate("Receitas")}><Text>Receitas</Text></TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 25,
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
  });
  