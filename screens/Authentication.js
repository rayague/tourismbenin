import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
export default function Authentication() {
    const navigation = useNavigation();

    const handleSignUp = () => {
        navigation.navigate("S'inscrire", { screen: 'SignUp' });

    };

        const handlePickingUp = () => {
        navigation.navigate("Votre choix", { screen: 'PickingUp' });

    };

    return (
        <View style={styles.container}>
                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Adresse e-mail"
                            placeholderTextColor="#9CA3AF"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Mot de passe"
                            placeholderTextColor="#9CA3AF"
                            secureTextEntry
                        />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Se connecter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePickingUp}>
                        <Text style={styles.signUpText}>Je n'ai pas de compte</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    backgroundColor: '#000'

    },
    form: {
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 'auto',
        marginVertical: 130,
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
        backgroundColor: '#4CAF50',
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
        color: '#4CAF50',
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', 
    },
});
