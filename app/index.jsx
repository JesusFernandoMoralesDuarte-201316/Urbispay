import { SafeAreaView, View } from 'react-native';
import LinkPages from '../components/LinkPages';


export default function Index() {
    return (
        <View>
            <SafeAreaView style={{ marginVertical: 400, marginHorizontal: 175 }}>
                <LinkPages text='Login' type='Bold' link='../auth/Login' />

            </SafeAreaView>
        </View>
    )
}
