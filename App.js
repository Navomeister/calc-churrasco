import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';
import Dropdown from './src/Components/Dropdown';
import ItemDropdown from './src/Components/ItemDropdown';
import Fontes from './src/Styles/Fontes';
import EscolhaCarnes from './src/Pages/EscolhaCarnes';

export default function App() {
  return(
    <EscolhaCarnes/>
  );
}
