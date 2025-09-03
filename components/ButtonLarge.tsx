import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

interface CustomButtonLargesProps {
    text: string
    onPress: () => void
}


export default function ButtonLarge({ text, onPress }: CustomButtonLargesProps) {

    return (
        <View>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </Pressable>
        </View>
    )
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
        marginTop: 32,
    },

    buttonText: {
        color: '#fff',
        fontFamily: 'MavenProMedium',
        fontSize: 15,
        textAlign: 'center',
    },
});
