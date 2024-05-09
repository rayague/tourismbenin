import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import geolib from 'geolib';


export default function MapComponentWeb() {
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 30,
    longitudeDelta: 30,
  });
  const [markers, setMarkers] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleSearch = async () => {
    // Effectuer une recherche à l'aide d'un service de géocodage (ex: Google Places API)
    // Mettre à jour les marqueurs avec les résultats de la recherche
  };

  const calculateDistance = (marker) => {
    // Calculer la distance entre le marqueur et la position actuelle de l'utilisateur
    const distance = geolib.getDistance(
      { latitude: region.latitude, longitude: region.longitude },
      { latitude: marker.latitude, longitude: marker.longitude }
    );
    alert(`Distance: ${distance} mètres`);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker}
            title={`Marker ${index + 1}`}
            onPress={() => calculateDistance(marker)}
          />
        ))}
      </MapView>
      <View style={{ position: 'absolute', top: 10, left: 10, right: 10 }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
          placeholder="Search"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
    </View>
  );
}
