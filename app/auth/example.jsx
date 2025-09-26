// LoginScreen.tsx
import {
    AuthenticationDetails,
    CognitoUser,
    CognitoUserPool,
} from "amazon-cognito-identity-js";
import { registerRootComponent } from 'expo';
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import 'react-native-get-random-values';

// ⚡ Configuración de tu User Pool de AWS Cognito
const poolData = {
    UserPoolId: "us-east-2_tU0xPsasL", // Reemplaza con tu User Pool ID
    ClientId: "16t6k600fbm5lhgkgt7qsd2d4u",       // Reemplaza con tu App Client ID
};
const userPool = new CognitoUserPool(poolData);

const LoginScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (!username || !password) {
            Alert.alert("Error", "Por favor ingresa usuario y contraseña");
            return;
        }

        const authenticationDetails = new AuthenticationDetails({
            Username: username,
            Password: password,
        });

        const user = new CognitoUser({
            Username: username,
            Pool: userPool,
        });

        user.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
                console.log("Login exitoso:", result);
                Alert.alert("Éxito", "Sesión iniciada correctamente");
            },
            onFailure: (err) => {
                console.error("Error de login:", err);
                Alert.alert("Error", err.message || JSON.stringify(err));
            },
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: "#007AFF",
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

// Registra el componente LoginScreen como el componente raíz
registerRootComponent(LoginScreen);
