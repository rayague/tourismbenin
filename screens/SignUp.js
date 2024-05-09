import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('touriste'); // Default to 'Touriste'

  const handleSignUp = () => {
    // Ajoutez votre logique de gestion de l'inscription ici
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Type d\'utilisateur:', userType);
  };

  const navigation = useNavigation();

  const handleAuth = () => {
    // Naviguer vers l'écran de connexion
    navigation.navigate('Authentication');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/picture7.jpg')} style={styles.backgroundImage}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Votre Nom"
              onChangeText={(text) => setName(text)}
              value={name}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              autoCapitalize="none" 
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirmer le mot de passe"
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
              secureTextEntry
            />
          </View>
          <View style={styles.inputContainer}>
            <Picker
              selectedValue={userType}
              style={styles.picker}
              onValueChange={(itemValue) => setUserType(itemValue)}
            >
              <Picker.Item label="Touriste" value="touriste" />
              <Picker.Item label="Agence touristique" value="agence" />
            </Picker>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>S'inscrire</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAuth}>
            <Text style={styles.signUpText}>Me connecter</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
    backgroundColor: '#2563EB',
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
