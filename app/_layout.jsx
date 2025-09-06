import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { View } from 'react-native';

const RootLayout = () => {
    const [loaded] = useFonts({
        MavenProExtraBold: require('../assets/fonts/MavenPro-ExtraBold.ttf'),
        MavenProMedium: require('../assets/fonts/MavenPro-Medium.ttf'),
        InterRegular: require('../assets/fonts/Inter_18pt-Regular.ttf'),
        InterMedium: require('../assets/fonts/Inter_18pt-Medium.ttf'),
    });

    if (!loaded) return null;

    return (
        <View style={{ flex: 1 }}>
            {/* Renderiza las páginas hijas */}
            <Slot />
        </View>
    );
};

export default RootLayout;


