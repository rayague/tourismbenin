import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../firebase'; // Assurez-vous que le chemin vers votre fichier firebase est correct
import { auth } from '../firebase'; // Assurez-vous que le chemin vers votre fichier firebase est correct

export default function RegisterTourist() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryOfResidence, setCountryOfResidence] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSignUp = () => {
    // Vérifier si les mots de passe correspondent
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    // Créer un nouvel utilisateur avec email et mot de passe
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Utilisateur enregistré avec succès
        const user = userCredential.user;
        // Enregistrer les autres détails de l'utilisateur dans la base de données
        firebase.database().ref('users/' + user.uid).set({
          name: name,
          nationality: nationality,
          phoneNumber: phoneNumber,
          countryOfResidence: countryOfResidence,
          birthdate: birthdate,
        }).then(() => {
          // L'utilisateur et ses détails ont été enregistrés avec succès
          alert("Inscription réussie !");
          // Naviguer vers l'écran de connexion
          navigation.navigate("Se connecter", { screen: 'authentication' });
        }).catch((error) => {
          // Une erreur s'est produite lors de l'enregistrement des détails de l'utilisateur
          console.error("Erreur lors de l'enregistrement des détails de l'utilisateur :", error);
          alert("Une erreur s'est produite lors de l'inscription. Veuillez réessayer !");
        });
      })
      .catch((error) => {
        // Une erreur s'est produite lors de la création de l'utilisateur
        console.error("Erreur lors de la création de l'utilisateur :", error);
        alert("Une erreur s'est produite lors de l'inscription. Veuillez réessayer !");
      });
  };

  const handleAuth = () => {
    // Naviguer vers l'écran de connexion
    navigation.navigate("Se connecter", { screen: 'authentication' });
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Votre Nom"
              value={name}
              onChangeText={(text) => setName(text)}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Votre date de Naissance"
              value={birthdate}
              onChangeText={(text) => setBirthdate(text)}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Votre Nationalité"
              value={nationality}
              onChangeText={(text) => setNationality(text)}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Votre Numéro"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Votre Pays de Résidence"
              value={countryOfResidence}
              onChangeText={(text) => setCountryOfResidence(text)}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirmer le mot de passe"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>S'inscrire</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAuth}>
            <Text style={styles.signUpText}>Me connecter</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 'auto',
    marginTop: 30,
    marginBottom: 100,
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
});
