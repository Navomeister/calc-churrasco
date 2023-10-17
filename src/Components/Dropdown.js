import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import ReturnSvg from "./ReturnSvg";
import Fundos from "../Styles/Fundos";
import Fontes from "../Styles/Fontes";

export default function Dropdown({icone, texto, setVisivel, visivel}){
    return(
        <View style={styles.caixa}>
            <TouchableOpacity style={[Fundos.fundoPrimario, styles.dropdown]} onPress={() => setVisivel(!visivel)}>
            <ReturnSvg svg={icone}/>
            <Text style={Fontes.escritaPrimaria}>{texto}</Text>
            {visivel ? <ReturnSvg svg={"SetaCima"}/> : <ReturnSvg svg={"SetaBaixo"}/>}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    dropdown:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'auto',
        paddingHorizontal: 5,
        marginTop: 10,
    },
    caixa: {
        width: 300,
    }
})