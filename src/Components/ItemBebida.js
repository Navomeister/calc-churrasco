import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import ReturnSvg from "./ReturnSvg";
import Fundos from "../Styles/Fundos";
import Fontes from "../Styles/Fontes";

export default function ItemDropdown({texto, itensSel, setItensSel, svg}){
    return(
          <TouchableOpacity style={[Fundos.fundoSecundario, styles.botao]} onPress={() => {itensSel.includes(texto, undefined) ? setItensSel(itensSel.filter((i) => i != texto )) : setItensSel(itensSel.concat(texto))}}>
            <ReturnSvg svg={svg}/>
            <Text style={Fontes.escritaSecundaria}>
              {texto}
            </Text>
            {itensSel.includes(texto, undefined) ? <ReturnSvg svg={"Checked"}/> : <ReturnSvg svg={"Unchecked"}/>}
          </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 'auto',
      padding: 10
    },
})