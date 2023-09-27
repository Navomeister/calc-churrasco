import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import ReturnSvg from "./ReturnSvg";
import Fundos from "../Styles/Fundos";
import Fontes from "../Styles/Fontes";

export default function ItemDropdown({texto, itensSel, setItensSel}){
    return(
          <TouchableOpacity style={[Fundos.fundoSecundario, styles.botao]} onPress={() => {itensSel.includes(texto, undefined) ? setItensSel(itensSel.filter((i) => i != texto )) : setItensSel(itensSel.concat(texto))}}>
            {itensSel.includes(texto, undefined) ? <ReturnSvg svg={"Checked"}/> : <ReturnSvg svg={"Unchecked"}/>}
            <Text style={Fontes.escritaSecundaria}>
              {texto}
            </Text>
          </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 'auto',
      borderTopWidth: 3,
      borderTopColor: '#CD0000',
      padding: 5
    },
})