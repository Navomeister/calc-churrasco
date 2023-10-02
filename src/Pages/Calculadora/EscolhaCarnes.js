import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Dropdown from '../../Components/Dropdown';
import ItemDropdown from '../../Components/ItemDropdown';
import Fontes from '../../Styles/Fontes';
import Fundos from '../../Styles/Fundos';

export default function EscolhaCarnes({ navigation, route }) {
  const [itensSel, setItensSel] = useState([]);
  const [visivelVer, setVisivelVer] = useState(false);
  const [visivelBra, setVisivelBra] = useState(false);
  const [visivelSui, setVisivelSui] = useState(false);
  const [visivelEtc, setVisivelEtc] = useState(false);

  const renderDropdownVermelha = () => {
    if (visivelVer) {
      return (
        <View style={styles.caixa}>
          <ItemDropdown texto={"Patinho"} itensSel={itensSel} setItensSel={setItensSel}/>
          <ItemDropdown texto={"Coxão Duro"} itensSel={itensSel} setItensSel={setItensSel}/>
          <ItemDropdown texto={"Maminha"} itensSel={itensSel} setItensSel={setItensSel}/>
        </View>
      );
    }
  };
  const renderDropdownBranca = () => {
    if (visivelBra) {
      return (
        <View style={styles.caixa}>
          <ItemDropdown texto={"Asa"} itensSel={itensSel} setItensSel={setItensSel}/>
          <ItemDropdown texto={"Coração"} itensSel={itensSel} setItensSel={setItensSel}/>
          <ItemDropdown texto={"Peito"} itensSel={itensSel} setItensSel={setItensSel}/>
        </View>
      );
    }
  };
  const renderDropdownSuina = () => {
    if (visivelSui) {
      return (
        <View style={styles.caixa}>
          <ItemDropdown texto={"Costela"} itensSel={itensSel} setItensSel={setItensSel}/>
          <ItemDropdown texto={"Linguiça"} itensSel={itensSel} setItensSel={setItensSel}/>
          <ItemDropdown texto={"Pururuca"} itensSel={itensSel} setItensSel={setItensSel}/>
        </View>
      );
    }
  };

  const renderDropdownOutros = () => {
    if (visivelEtc) {
      return (
        <View style={styles.caixa}>
          <ItemDropdown texto={"Pão de Alho"} itensSel={itensSel} setItensSel={setItensSel}/>
          <ItemDropdown texto={"Queijo Coalho"} itensSel={itensSel} setItensSel={setItensSel}/>
          <ItemDropdown texto={"Farofa"} itensSel={itensSel} setItensSel={setItensSel}/>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* Título */}
      <View style={styles.caixaTitulo}>
        <Text style={Fontes.tituloSecundaria}>Tipos de Carnes</Text>
      </View>
      {/* Botões */}
      <View style={styles.caixaDropdowns}>
        <ScrollView>
          <Dropdown visivel={visivelVer} setVisivel={setVisivelVer} icone={"Vaca"} texto={"Vermelha"}/>
          {renderDropdownVermelha()}
          <Dropdown visivel={visivelBra} setVisivel={setVisivelBra} icone={"Galinha"} texto={"Branca"}/>
          {renderDropdownBranca()}
          <Dropdown visivel={visivelSui} setVisivel={setVisivelSui} icone={"Porco"} texto={"Suína"}/>
          {renderDropdownSuina()}
          <Dropdown visivel={visivelEtc} setVisivel={setVisivelEtc} icone={"Espetinho"} texto={"Outros"}/>
          {renderDropdownOutros()}
        </ScrollView>
      </View>
      {/* Botões Navegação */}
      <View style={styles.caixaNavegacao}>
        <TouchableOpacity onPress={() => navigation.pop()} style={[styles.botoesNavegacao, Fundos.fundoTerciario]}>
            <Text style={Fontes.escritaPrimaria}>
                Voltar
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Bebidas', {itens: itensSel})} style={[styles.botoesNavegacao, Fundos.fundoTerciario]}>
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
    borderRadius: 10,
    width: 125,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
