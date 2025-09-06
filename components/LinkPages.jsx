import { useRouter } from 'expo-router';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function LinkPages({ text, type = 'Medium', link }) {
    const router = useRouter();

    return (
        <View>
            <TouchableOpacity
                onPress={() => router.push(link)}
            >
                <Text style={type === 'Medium' ? styles.Medium : type === 'Bold' ? styles.Bold : null}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    Medium: {
        color: '#2C8C64',
        fontFamily: 'Arial',
        fontSize: Platform.OS === 'ios' ? 13 : 12,
    },

    Bold: {
        fontSize: 15,
        color: '#174834',
        fontWeight: 'bold',
    },
});


