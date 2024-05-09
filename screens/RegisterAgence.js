import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase'


export default function RegisterAgence() {
      const navigation = useNavigation();
      const handleAuth = () => {
    // Naviguer vers l'écran de connexion
        navigation.navigate("Se connecter", { screen: 'authentication' });
  };
  return (
        <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Votre Nom"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              autoCapitalize="none" 
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              secureTextEntry
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirmer le mot de passe"
              secureTextEntry
            />
              </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>S'inscrire</Text>
            </TouchableOpacity>
          <TouchableOpacity onPress={handleAuth}>
            <Text style={styles.signUpText}>Me connecter</Text>
          </TouchableOpacity>
        </View>
        </View>
  )
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#000',
  },
  form: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 'auto',
    marginVertical: 25,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    width: '100%',
  },
  picker: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signUpText: {
    color: '#4CAF50',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
})