import { TouchableOpacity, SafeAreaView, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Fundos from "../Styles/Fundos";


export default function Teste2({navigation}){
    return(
        <SafeAreaView>
            <StatusBar style="auto"/>
            <TouchableOpacity style={[styles.botoesNavegacao, Fundos.fundoTerciario]} onPress={() => navigation.navigate("Teste")}><Text>Voltar</Text></TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
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
  