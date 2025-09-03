//Componentes de React Native
import { TextInput, View } from "react-native";

// Metodos de React Native
import { Platform, StyleSheet, Text } from "react-native";

import { Controller } from "react-hook-form";

//Definicion de props

export interface IFormValues {
    Email: string;
    Password: string;
}

interface CustomInputProps {
    type: "Text" | "Email" | "Password" | "Number";
    control: any;
    rules?: object;
    label: keyof IFormValues;
    error?: string;
}

export default function FormInput({ type, label, control, rules, error }: CustomInputProps) {
    return (
        <View style={styles.Input}>
            <Controller
                control={control}
                name={label}
                rules={rules}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder={label}
                        placeholderTextColor="#7A7777"
                        secureTextEntry={type === "Password"}
                        keyboardType={type === "Number" ? (Platform.OS === "ios" ? "numeric" : "number-pad") : "default"}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                    />
                )}
            />

            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    Input: {
        width: Platform.OS === "ios" ? 350 : 330,
        height: 45,
        backgroundColor: "#D9D9D9",
        borderRadius: 6,
        paddingLeft: 12.5,
        paddingVertical: Platform.OS === "ios" ? 12 : 3,
        marginLeft: 32,
        marginBottom: 20,
        fontSize: 15,
        fontFamily: "Arial",
    },

    errorText: {
        color: "red",
        fontSize: 12,
        marginLeft: 32,
        marginTop: 5,
    },
});