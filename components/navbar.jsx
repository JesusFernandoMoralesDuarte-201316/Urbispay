import { Image, Platform, StyleSheet, Text, View } from 'react-native';

export default function Navbar() {
    return (
        <View style={styles.navbar}>
            <Image source={require('../assets/images/avatar.jpg')} style={styles.avatar} />
            <Text style={styles.username}>Hola Fernando Morales</Text>
            <Text style={styles.subtitle}>Bienvenido, comencemos con los pagos</Text>
            <Image source={require('../assets/images/notificacion.png')} style={styles.notificationIcon} />
        </View>
    );
};

const styles = StyleSheet.create({

    navbar: {
        position: 'absolute',
        height: 100,
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#2C8C64',
    },

    username: {
        position: 'absolute',
        top: Platform.OS === 'android' ? 50 : 55,
        left: 67,
        fontFamily: 'MavenProExtraBold',
        fontSize: 12,
        color: '#fff',
    },

    subtitle: {
        position: 'absolute',
        top: Platform.OS === 'android' ? 65 : 70,
        left: 67,
        fontFamily: 'MavenProMedium',
        fontSize: 12,
        color: '#fff',
    },

    notificationIcon: {
        position: 'absolute',
        top: 60,
        right: 20,
        width: 20,
        height: 20
    },

    avatar: {
        position: 'absolute',
        top: 50,
        left: 20,
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});