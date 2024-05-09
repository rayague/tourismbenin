import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function PickingUp() {
      const navigation = useNavigation();

    const handleTourist = () => {
        // navigation.navigate('SignUp'); 
        navigation.navigate("Inscription Touriste", { screen: 'RegisterTourist' });

    };
      const handleAgenceTourist = () => {
        // navigation.navigate('SignUp'); 
        navigation.navigate("Inscription Agence", { screen: 'RegisterAgence' });

    };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPressIn={handleTourist}>
        <Text style={styles.buttonText}>Touriste</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPressIn={handleAgenceTourist}>
        <Text style={styles.buttonText}>Agence Touristique</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'

  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: 300,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18, 
  },
})
