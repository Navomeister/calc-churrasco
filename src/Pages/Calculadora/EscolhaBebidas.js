import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import ItemBebida from '../../Components/ItemBebida';
import Fontes from '../../Styles/Fontes';
import Fundos from '../../Styles/Fundos';
import Linha from '../../Components/Linha';

 
export default function EscolhaBebidas({ navigation, route }){
    const {adultos, criancas, itens} = route.params;
    const [bebidasSel, setBebidasSel] = useState([]);

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.caixaTitulo}>
                <Text style={Fontes.tituloSecundaria}>
                    Tipos de Bebidas
                </Text>
            </View>
            <View style={styles.caixaDropdowns}>
                <ItemBebida texto={"Suco"} itensSel={bebidasSel} setItensSel={setBebidasSel} svg={"Suco"}/>
                <Linha/>
                <ItemBebida texto={"Cerveja"} itensSel={bebidasSel} setItensSel={setBebidasSel} svg={"Cerveja"}/>
                <Linha/>
                <ItemBebida texto={"Vinho"} itensSel={bebidasSel} setItensSel={setBebidasSel} svg={"Vinho"}/>
                <Linha/>
                <ItemBebida texto={"Água"} itensSel={bebidasSel} setItensSel={setBebidasSel} svg={"Agua"}/>
            </View>
            {/* Botões Navegação */}
            <View style={styles.caixaNavegacao}>
                <TouchableOpacity onPress={() => navigation.pop()} style={[styles.botoesNavegacao, Fundos.fundoTerciario]}>
                    <Text style={Fontes.escritaPrimaria}>
                        Voltar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Listachurrasco', {adultos: adultos, criancas: criancas, itens: itens, bebidas: bebidasSel})} style={[styles.botoesNavegacao, Fundos.fundoTerciario]}>
                    <Text style={Fontes.escritaPrimaria}>
                        Próximo
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    caixaTitulo:{
      flex: 1,
      justifyContent: 'center',
  
    },

    caixa: {
        width: 300,
    },
  
    caixaDropdowns: {
      flex: 3,
      paddingBottom: 10,
      width: 300,
    
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
  