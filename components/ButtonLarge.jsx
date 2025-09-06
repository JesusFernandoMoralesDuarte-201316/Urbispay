import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';


export default function ButtonLarge({ text, onPress }) {
    return (
        <View>
            <Pressable
                style={styles.button}
                onPress={() => {
                    console.log("Button pressed");
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
    },

    buttonText: {
        color: '#fff',
        fontFamily: 'MavenProMedium',
        fontSize: 15,
        textAlign: 'center',
    },
});
