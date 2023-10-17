import { View } from "react-native";
import Fundos from "../Styles/Fundos";

export default function Linha(){
    return(
        <View style={[Fundos.fundoPrimario, {height: 3}]}/>
    )
}