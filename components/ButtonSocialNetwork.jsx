import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';


// Mapeo de nombres de imágenes a rutas estáticas
const imageMap = {
    'google.png': require('../assets/images/google.png'),
    'facebook.png': require('../assets/images/facebook.png'),
};

export default function ButtonSocialNetwork({ text, imageName }) {
    return (
        <View>
            <Pressable style={styles.buttonSocial}>
                <Image
                    source={imageMap[imageName]} // Selección de la imagen desde el mapeo
                    style={styles.socialNetwork}
                />
                <Text style={styles.textSocial}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonSocial: {
        width: Platform.OS === 'ios' ? 345 : 325,
        height: 45,
        backgroundColor: '#D9D9D9',
        borderRadius: 6,
        paddingLeft: 12.5,
        paddingVertical: Platform.OS === 'ios' ? 14 : 12,
        marginLeft: 32,
        marginBottom: 20,
        fontSize: 15,
        fontFamily: 'Arial',

        flexDirection: 'row',
        justifyContent: 'center',
    },

    textSocial: {
        paddingTop: Platform.OS === 'ios' ? 1 : 3,
    },

    socialNetwork: {
        width: 20,
        height: 20,
        marginRight: 7,
    },
});
