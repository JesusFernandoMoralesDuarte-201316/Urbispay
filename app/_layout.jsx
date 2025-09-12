import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";

import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";

// Configuración de Amplify
Amplify.configure(awsconfig, { Logging: "DEBUG" });

// Evita que el splash se oculte automáticamente
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [loaded] = useFonts({
        MavenProExtraBold: require("../assets/fonts/MavenPro-ExtraBold.ttf"),
        MavenProMedium: require("../assets/fonts/MavenPro-Medium.ttf"),
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
