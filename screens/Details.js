import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Details({ route }) {
  const { itemId } = route.params; // Récupérer l'ID de l'élément sélectionné
  // Utiliser itemId pour afficher les détails spécifiques à l'élément

  // Exemple d'affichage des détails de l'élément
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détails de l'élément {itemId}</Text>
      <Text>Description de l'élément {itemId}</Text>
      {/* Ajoutez d'autres détails ici */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
