import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Modal from "react-native-modal";
import Fontes from "../Styles/Fontes";
import Fundos from "../Styles/Fundos";
import Icon from "react-native-vector-icons/Feather";

export default function ModalMenu({navigation, modalVisible, setModalVisible}) {
    return(
        <View>
            <Modal style={styles.modal}
                isVisible={modalVisible}
                animationIn="slideInRight"
                animationOut="slideOutRight"
                onBackdropPress={() => setModalVisible(false)}
                onSwipeComplete={() => setModalVisible(!modalVisible)}
                swipeDirection="right">
                <View style={{alignSelf: 'flex-end'}}>
                    <Icon onPress={() => setModalVisible(!modalVisible)} name="x" size={50}/>
                </View>
                <View>
                    <View style={{backgroundColor: '#aaa', width: 200, height: 1}}/>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Receitas")}
                            style={styles.botoes}
                        >
                            <Text style={[Fontes.tituloSecundaria, {textAlign: 'center'}]}>Receitas</Text>
                        </TouchableOpacity>
                    <View style={{backgroundColor: '#aaa', width: 200, height: 1}}/>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Calculadora")}
                            style={styles.botoes}
                        >
                            <Text style={[Fontes.tituloSecundaria, {textAlign: 'center'}]}>Calculadora</Text>
                        </TouchableOpacity>
                    <View style={{backgroundColor: '#aaa', width: 200, height: 1}}/>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    imagemLogo: {
      width: 100,
      height: 30,
    },
    modal: {
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      margin: 0,
      marginLeft: 150,
    },
    botoes: {
        height: 60,
        justifyContent: 'center',
        width: 200
    }
  
  });
  
  