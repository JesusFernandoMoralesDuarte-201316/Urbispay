import { Pressable, StyleSheet, View } from 'react-native';

export default function CheckBox() {
    return (
        <View>
            <Pressable style={styles.checkboxBase}></Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    checkboxBase: {
        width: 16,
        height: 16,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#D9D9D9',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
