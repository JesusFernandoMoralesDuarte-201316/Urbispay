import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';


export default function ButtonLarge({ text, onPress, type = 'primary' }) {
    return (
        <View>
            <Pressable
                style={type === 'secondary' ? styles.buttonSecondary : styles.button}
                onPress={() => {
                    onPress();
                }}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </Pressable>
        </View>
    );
}



const styles = StyleSheet.create({
    button: {
        width: Platform.OS === 'ios' ? 320 : 300,
        height: 45,
        backgroundColor: '#2C8C64',
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 40,
        marginBottom: 10,
    },

    buttonText: {
        color: '#fff',
        fontFamily: 'MavenProMedium',
        fontSize: 15,
        textAlign: 'center',
    },

    buttonSecondary: {
        width: Platform.OS === 'ios' ? 320 : 300,
        height: 45,
        backgroundColor: '#7A7777',
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 40,
        marginBottom: 10,
    },
});
