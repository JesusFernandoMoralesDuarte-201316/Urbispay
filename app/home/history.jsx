import { StyleSheet, Text, View } from 'react-native';
import Navbar from '../../components/navbar';

const Home = () => {
    return (
        <View style={styles.container}>
            <Navbar />
            <Text style={styles.title}>Historial de Servicios</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        position: 'relative',
    },


    title: {
        fontSize: 24,
        fontWeight: 'bold',

    },

});

export default Home;