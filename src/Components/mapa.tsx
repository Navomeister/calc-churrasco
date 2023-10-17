import React, { useState, useEffect } from 'react';
import MapView  from 'react-native-maps';
import { StyleSheet, Text, View, } from 'react-native';

import * as Location from 'expo-location';

export default function Mapa() {

    const [initialRegion, setInitialRegion] = useState({
        // Coordenadas da localização específica que você deseja
        latitude: -23.6327,
    longitude: -46.7109,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
      });

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;
      

    })();
  }, []);


  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion} showsUserLocation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: 200,
    height: 200,
  }
});
