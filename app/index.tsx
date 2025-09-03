import LinkPages from '@/components/LinkPages';
import { SafeAreaView, View } from 'react-native';


export default function Index() {
    return (
        <View>
            <SafeAreaView style={{ marginVertical: 400, marginHorizontal: 175 }}>
                <LinkPages text='Login' type='Bold' link='../authScreen/signUp' />
            </SafeAreaView>
        </View>
    )
}
