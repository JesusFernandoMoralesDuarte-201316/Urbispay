import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";
import 'react-native-get-random-values';

import { Amplify } from "aws-amplify";
import awsconfig from "../src/amplifyconfiguration.json";


// Configuración de Amplify
Amplify.configure({
    ...awsconfig,
    Analytics: { disabled: true }, // importante si no usas Analytics
    ssr: false
});

// Evita que el splash se oculte automáticamente
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [loaded] = useFonts({
        MavenProExtraBold: require("../assets/fonts/MavenPro-ExtraBold.ttf"),
        MavenProBold: require("../assets/fonts/MavenPro-Bold.ttf"),
        MavenProMedium: require("../assets/fonts/MavenPro-Medium.ttf"),
        MavenProRegular: require("../assets/fonts/MavenPro-Regular.ttf"),
        InterRegular: require("../assets/fonts/Inter_18pt-Regular.ttf"),
        InterMedium: require("../assets/fonts/Inter_18pt-Medium.ttf"),
        InterExtraBold: require("../assets/fonts/Inter_18pt-ExtraBold.ttf"),
        InterBlack: require("../assets/fonts/Inter_18pt-Black.ttf"),
        InterBold: require("../assets/fonts/Inter_18pt-Bold.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            // Cuando las fuentes estén listas, ocultamos el splash
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        // Mientras cargan las fuentes, mantenemos el splash visible
        return null;
    }

    return (
        <View style={{ flex: 1 }}>
            <Slot />
        </View>
    );
};

export default RootLayout;

