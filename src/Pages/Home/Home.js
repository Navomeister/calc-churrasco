import { TouchableOpacity, SafeAreaView, StyleSheet, Text, Image, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Fundos from "../../Styles/Fundos";
export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require("../../img/principal_churras.png")}
        style={styles.imagemDeFundo}
      />

      <View style={styles.logoContainer}>
        <Image source={require("../../img/Logo.png")} style={styles.logo} />
      </View>

      <TouchableOpacity
        style={[styles.botoesNavegacao, Fundos.fundoTerciario]}
        onPress={() => navigation.navigate("Calculadora")}
      >
        <Text>Calcular Churrasco</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botoesNavegacao, Fundos.fundoTerciario]}
        onPress={() => navigation.navigate("Receitas")}
      >
        <Text>Receitas</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  imagemDeFundo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 20, //margem inferior conforme necessário
    marginTop: -100,
  },

  logo: {
    width: 300, // tamanho da imagem de logo
    height: 100, // tamanho da imagem de logo
  },

  caixa: {
    width: 300,
  },

  caixaTitulo: {
    flex: 3,
    justifyContent: "center",
  },

  caixaDropdowns: {
    flex: 2,
    paddingBottom: 50,
  },

  caixaNavegacao: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 300,
    alignItems: "center",
  },

  botoesNavegacao: {
    borderRadius: 10, // Aumenta o raio da borda para tornar os botões mais arredondados
    width: 250, // Aumenta a largura dos botões de navegação
    height: 60, // Aumenta a altura dos botões de navegação
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20, // Adiciona margem vertical entre os botões
  },
});
