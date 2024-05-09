import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';
import Horizontal from '../homeComponents/Horizontal'; // Importation de la liste horizontale
import Vertical from '../homeComponents/Vertical'; // Importation de la liste verticale
const backgroundImage = require('../assets/picture7.jpg'); // Importez votre image de fond
import Details from '../screens/Details';



export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
            <Text style={styles.signUpText}>Me connecter</Text>
      </View>

      <FlatList
        data={['horizontal', 'vertical']}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            {item === 'horizontal' ? <Horizontal /> : <Vertical />}
          </View>
        )}
        keyExtractor={(item) => item}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
        />
      {/* </ImageBackground> */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
    backgroundColor: '#000'
  },
    backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Assurez-vous que l'image de fond couvre toute la surface
  },
});
