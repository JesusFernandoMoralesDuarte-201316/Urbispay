import { useRouter } from 'expo-router';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

const App = () => {

    const router = useRouter();


    return (

        <View style={styles.content}>
            <Text style={styles.title}>Vamos a Empezar!!</Text>
            <Text style={styles.subtitle}>Paga tus servicios y trámites de forma rápida y segura. <Text style={styles.subtitleBold}>Con UrbisPay, la vida es más fácil.</Text></Text>
            <Pressable
                style={styles.button}
                onPress={() => router.push('/auth/signUp')}
            >
                <Text style={styles.textButton}>Crear Cuenta</Text>
            </Pressable>
            <Pressable
                style={styles.button2}
                onPress={() => router.push('/auth/Login')}
            >
                <Text style={styles.textButton2}>Iniciar Sesión</Text>
            </Pressable>
        </View>

    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 32,
        alignItems: 'center',
        position: 'relative',
    },
    title: {
        fontFamily: 'InterExtraBold',
        fontSize: 32,
        color: '#2C8C64'
    },
    subtitle: {
        marginTop: 30,
        marginLeft: Platform.OS === 'ios' ? 20 : 5,
        letterSpacing: 0.03,
        lineHeight: 25,
        fontSize: 14,
        fontFamily: 'InterMedium',
        color: '#000000',
    },

    subtitleBold: {
        fontFamily: 'InterExtraBold',
        fontSize: 14,
        color: '#2C8C64',
    },


    button: {
        backgroundColor: '#2C8C64',
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10,

        position: 'absolute',
        bottom: 90,
        left: 12

    },

    button2: {
        backgroundColor: '#28a06e7c',
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10,
        position: 'absolute',
        bottom: 90,
        right: 12,

    },

    textButton: {
        fontFamily: 'InterExtraBold',
        color: '#fff',
        fontSize: 14,
    },

    textButton2: {
        fontFamily: 'InterExtraBold',
        color: '#174834',
        fontSize: 14,
    }
});

export default App;