import React, { useState } from 'react';
// import React from 'react';

import { SafeAreaView, StyleSheet, View, TextInput, FlatList, ImageBackground } from 'react-native';
import HorizontalList from '../homeComponents/Horizontal'; // Importation de la liste horizontale
import VerticalList from '../homeComponents/Vertical'; // Importation de la liste verticale
const backgroundImage = require('../assets/picture7.jpg'); // Importez votre image de fond

export default function Seach() {
    const [searchText, setSearchText] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground source={backgroundImage} style={styles.backgroundImage}> */}
      
      <TextInput
        style={styles.input}
          placeholder="Rechercher"
          placeholderTextColor="white"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      {/* <FlatList
        data={['horizontal', 'vertical']}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            {item === 'horizontal' ? <HorizontalList /> : <VerticalList />}
          </View>
        )}
        keyExtractor={(item) => item}
        horizontal={false}
        />
         */}
      {/* </ImageBackground> */}
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
    input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 10,
      backgroundColor: 'gray',
    color: 'white',
  },
        backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Assurez-vous que l'image de fond couvre toute la surface
  },
});
