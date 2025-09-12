//Componentes de React Native
import { TextInput, View } from "react-native";

// Metodos de React Native
import { Image, Platform, StyleSheet, Text } from "react-native";

import { Controller } from "react-hook-form";

const imageMap = {
    'calendar.png': require('../assets/images/calendar.png'),
    'gender.png': require('../assets/images/gender.png'),
};


export default function FormInputSmall({ type, label, control, rules, error, icon }) {
    return (
        <View style={[styles.Input, error && styles.inputError]}>
            <Image
                source={imageMap[icon]}
                style={styles.icon}
            />
            <Controller
                control={control}
                name={label}
                rules={rules}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder={label}
                        placeholderTextColor="#7A7777"
                        secureTextEntry={type === "Password"}
                        keyboardType={
                            type === "Number" ? (Platform.OS === "ios" ? "numeric" : "number-pad") : "default"
                        }
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        autoCapitalize="none"
                        style={styles.textInput}
                    />
                )}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    Input: {
        width: Platform.OS === "ios" ? 158 : 150,
        height: 45,
        backgroundColor: "#D9D9D9",
        borderRadius: 6,
        paddingLeft: 50,
        paddingRight: 5,
        paddingTop: 3,
        //paddingVertical: Platform.OS === "ios" ? 15 : 3,
        marginLeft: 32,
        marginBottom: 25,
        fontSize: 15,
        fontFamily: "InterRegular",
        flexDirection: 'row',
        position: 'relative'
    },

    errorText: {
        position: 'absolute',
        top: -20,
        color: '#FE0000',
        fontSize: 12,
    },

    inputError: {
        borderWidth: 1,
        borderColor: '#FE0000',
        borderStyle: 'solid',
    },

    icon: {
        position: 'absolute',
        left: 10,
        top: 13,
        width: 20,
        height: 20,
        marginRight: 10,
    },

    textInput: {
        flex: 1,
        fontSize: Platform.OS === "ios" ? 15 : 13,
        fontFamily: "InterRegular",
        color: "#000",
    },
});