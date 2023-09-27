import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import ItemDropdown from "../Components/ItemDropdown";
import Fontes from '../Styles/Fontes';
import Fundos from '../Styles/Fundos';

 
export default function EscolhaBebidas({ navigation }){
    const [bebidasSel, setBebidasSel] = useState([])
    return(
        <SafeAreaView>
            <Text> Olá </Text>
        </SafeAreaView>
    );
}