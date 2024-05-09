import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Pressable } from 'react-native'; // Remplacez TouchableOpacity par Pressable
// const backgroundImage = require('../assets/picture7.jpg'); // Importez votre image de fond
import { createStackNavigator } from '@react-navigation/stack';
import Authentication from './Authentication'; // Importez votre écran d'authentification
import SignUp from './SignUp'; // Importez votre écran d'inscription (SignUp)
import PickingUp from './PickingUp';
import RegisterAgence from './RegisterAgence';
import RegisterTourist from './RegisterTourist';

const Stack = createStackNavigator();

export default function Account() {
  return (
    <View style={styles.container}>
        <Stack.Navigator initialRouteName="PickingUp">
          <Stack.Screen name="Votre choix" component={PickingUp} />
          <Stack.Screen name="Se connecter" component={Authentication} />
          <Stack.Screen name="S'inscrire" component={SignUp} />
          <Stack.Screen name="Inscription Agence" component={RegisterAgence} />
          <Stack.Screen name="Inscription Touriste" component={RegisterTourist} />
          {/* <Stack.Screen name="S'inscrire" component={SignUp} /> */}
        </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 'auto',
    marginVertical: 'auto',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  },
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signUpText: {
    color: '#2563EB',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Assurez-vous que l'image de fond couvre toute la surface
  },
});
