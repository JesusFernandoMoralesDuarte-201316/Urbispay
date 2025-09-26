import { useRouter } from 'expo-router';
import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import LinkPages from '../../components/LinkPages';
import Navbar from '../../components/navbar';

const Home = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>

            <Navbar />

            <View style={styles.quickAccess}>
                <View style={{ width: 40, height: 64, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/add-card.png')} style={{ width: 32, height: 32, marginBottom: 4 }} />
                    <Text style={styles.quickAccessTitle}>Agregar Tarjeta</Text>
                </View>
                <View style={{ width: 40, height: 64, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/alarm-clock.png')} style={{ width: 32, height: 32, marginBottom: 4 }} />
                    <Text style={styles.quickAccessTitle}>Agregar alarma</Text>
                </View>
                <View style={{ width: 40, height: 64, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/help.png')} style={{ width: 32, height: 32, marginBottom: 4 }} />
                    <Text style={styles.quickAccessTitle}>Soporte tecnico</Text>
                </View>
            </View>

            <View style={styles.servicesContainer}>
                <Text style={styles.servicesTitle}>Servicios de Pago</Text>
                <View style={styles.servicesList}>
                    <View style={styles.serviceItem}>
                        <View style={styles.serviceBubble}>
                            <Image source={require('../../assets/images/iphone.png')} style={{ width: 32, height: 32 }} />
                        </View>
                        <Text style={styles.servicesIconTitle}>Recargas</Text>
                    </View>

                    <View style={styles.serviceItem}>
                        <View style={styles.serviceBubble}>
                            <Image source={require('../../assets/images/flash.png')} style={{ width: 32, height: 32 }} />
                        </View>
                        <Text style={styles.servicesIconTitle}>Electricidad</Text>
                    </View>

                    <View style={styles.serviceItem}>
                        <View style={styles.serviceBubble}>
                            <Image source={require('../../assets/images/car.png')} style={{ width: 32, height: 32 }} />
                        </View>
                        <Text style={styles.servicesIconTitle}>Vehicular</Text>
                    </View>

                    <View style={styles.serviceItem}>
                        <View style={styles.serviceBubble}>
                            <Image source={require('../../assets/images/graduation.png')} style={{ width: 32, height: 32 }} />
                        </View>
                        <Text style={styles.servicesIconTitle}>Educacion</Text>
                    </View>


                    <View style={styles.serviceItem}>
                        <View style={styles.serviceBubble}>
                            <Image source={require('../../assets/images/water.png')} style={{ width: 32, height: 32 }} />
                        </View>
                        <Text style={styles.servicesIconTitle}>Agua</Text>
                    </View>


                    <View style={styles.serviceItem}>
                        <View style={styles.serviceBubble}>
                            <Image source={require('../../assets/images/television.png')} style={{ width: 32, height: 32 }} />
                        </View>
                        <Text style={styles.servicesIconTitle}>Cable & TV</Text>
                    </View>

                    <View style={styles.serviceItem}>
                        <View style={styles.serviceBubble}>
                            <Image source={require('../../assets/images/government.png')} style={{ width: 32, height: 32 }} />
                        </View>
                        <Text style={styles.servicesIconTitle}>Gobierno</Text>
                    </View>

                    <View style={styles.serviceItem}>
                        <View style={styles.serviceBubble}>
                            <Image source={require('../../assets/images/gas-fuel.png')} style={{ width: 32, height: 32 }} />
                        </View>
                        <Text style={styles.servicesIconTitle}>Gas</Text>
                    </View>

                    <View style={styles.serviceItem}>
                        <View style={styles.serviceBubble}>
                            <Image source={require('../../assets/images/money.png')} style={{ width: 32, height: 32 }} />
                        </View>
                        <Text style={styles.servicesIconTitle}>Impuestos</Text>
                    </View>

                </View>
            </View>

            <Text style={[styles.servicesTitle, { position: 'absolute', bottom: Platform.OS === 'android' ? 260 : 270, left: 20 }]}>Servicios Mas Populares</Text>

            <View style={{ position: 'absolute', bottom: Platform.OS === 'android' ? 260 : 270, right: 30 }}>
                <LinkPages text="Ver mas..." type='ExtraBold' link="../auth/Login" />
            </View>

            <View style={styles.populateServicesContainer}>
                <ScrollView
                    horizontal={true}
                    contentContainerStyle={styles.populateServices}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.cardService}>
                        <Image source={require('../../assets/images/JMAS_juarez.png')} style={styles.serviceLogo} />
                        <Text style={styles.serviceName}>JMAS</Text>
                        <Text style={styles.serviceLocation}>Ciudad Juarez</Text>
                    </View>

                    <View style={styles.cardService}>
                        <Image source={require('../../assets/images/cfe.png')} style={styles.serviceLogo} />
                        <Text style={styles.serviceName}>CFE</Text>
                        <Text style={styles.serviceLocation}>Nacional</Text>
                    </View>

                    <View style={styles.cardService}>
                        <Image source={require('../../assets/images/gobierno_chihuahua_logo.jpg')} style={styles.serviceLogo} />
                        <Text style={styles.serviceName}>Licencias</Text>
                        <Text style={styles.serviceLocation}>Estatal</Text>
                    </View>

                    <View style={styles.cardService}>
                        <Image source={require('../../assets/images/gas.png')} style={styles.serviceLogo} />
                        <Text style={styles.serviceName}>Gas Natural</Text>
                        <Text style={styles.serviceLocation}>Ciudad Juarez</Text>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.footer}>
                <View style={{ width: 40, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/home_selected.png')} style={{ width: 25, height: 25 }} />
                    <Text style={{ fontSize: 12, color: '#000', marginTop: 6 }}>Home</Text>
                </View>
                <View style={{ width: 42, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable onPress={() => router.push('./history')}>
                        <Image source={require('../../assets/images/file.png')} style={{ width: 25, height: 25 }} />
                    </Pressable>
                    <Text style={{ fontSize: 12, color: '#000', marginTop: 6 }}>History</Text>
                </View>
                <View style={{ width: 40, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable onPress={() => console.log('Pressed Card!')}>
                        <Image source={require('../../assets/images/credit-card.png')} style={{ width: 25, height: 25 }} />
                    </Pressable>
                    <Text style={{ fontSize: 12, color: '#000', marginTop: 6 }}>Card</Text>
                </View>
                <View style={{ width: 40, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable onPress={() => console.log('Pressed Profile!')}>
                        <Image source={require('../../assets/images/profile-user.png')} style={{ width: 25, height: 25 }} />
                    </Pressable>

                    <Text style={{ fontSize: 12, color: '#000', marginTop: 6 }}>Profile</Text>
                </View>
            </View>


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

    quickAccess: {
        position: 'absolute',
        top: 100,
        width: '100%',
        height: 104,
        backgroundColor: '#fff',
        shadowColor: "#000", // negro
        shadowOffset: { width: 0, height: 4 }, // X=0, Y=4
        shadowOpacity: Platform.OS === 'android' ? 0.8 : 0.21, // 70%
        shadowRadius: Platform.OS === 'android' ? 14 : 2, // Blur = 6
        elevation: 6,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },

    quickAccessTitle: {
        fontSize: 10,
        fontFamily: 'MavenProRegular',
    },

    servicesContainer: {
        position: 'absolute',
        top: 204,
        paddingHorizontal: 20,
        paddingVertical: 23,
        width: '100%',

    },

    servicesTitle: {
        fontSize: 15,
        fontFamily: 'MavenProBold',
        color: '#000',
    },



    servicesList: {
        marginTop: 16,
        marginLeft: Platform.OS === 'android' ? 0.72 : 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    serviceItem: {
        marginRight: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },

    servicesIconTitle: {
        fontSize: 11,
        fontFamily: 'MavenProBold',
        color: '#000',
    },

    serviceBubble: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },

    populateServicesContainer: {
        position: 'absolute',
        width: '100%',
        height: 160,
        bottom: 100,
        left: 0,
        right: 0,

        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'flex-start',
        alignContent: 'center',
        gap: 20,
    },

    populateServices: {
        flexDirection: 'row', // Cambiado a 'row' para scroll horizontal
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20, // Espaciado entre elementos (opcional)
    },

    cardService: {
        width: 94,
        height: 130,

        paddingTop: 13,
        alignItems: 'center',

        backgroundColor: '#fff',
        shadowColor: "#134E5E",
        shadowOffset: { width: 3, height: 4 }, // X=3, Y=4
        shadowOpacity: Platform.OS === 'android' ? 0.8 : 0.21,
        shadowRadius: Platform.OS === 'android' ? 14 : 6, // Blur = 6
        elevation: 6,
    },

    serviceLogo: {
        width: 64,
        height: 64,
        borderRadius: 32,

    },

    serviceName: {
        fontSize: 12,
        marginTop: 10,
        fontFamily: 'InterBold',
        color: '#174834',
        marginBottom: 3,
    },

    serviceLocation: {
        fontSize: 10,
        fontFamily: 'InterRegular',
        color: '#000',
    },

    footer: {
        position: 'absolute',
        bottom: 0,
        height: 100,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#ffffffff", // color del contenedor
        shadowColor: "#000", // negro
        shadowOffset: { width: 0, height: 4 }, // X=0, Y=4
        shadowOpacity: Platform.OS === 'android' ? 0.8 : 0.70, // 70%
        shadowRadius: Platform.OS === 'android' ? 14 : 6, // Blur = 6
        elevation: 6, // Android equivalente aproximado
    }
});

export default Home;