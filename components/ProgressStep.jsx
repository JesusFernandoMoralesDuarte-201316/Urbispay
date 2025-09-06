import { StyleSheet, Text, View } from "react-native";


// Componente del step individual
export default function ProgressStep({
    number,
    label,
    isActive,
    isCompleted,
    showLine = true,
}) {
    return (
        <View style={{ flex: 1 }}>
            {/* Círculo y línea en fila */}
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginLeft: 5 }}>
                <View
                    style={[
                        styles.circle,
                        isActive && styles.circleActive,
                        isCompleted && styles.circleCompleted,
                    ]}
                >
                    <Text style={styles.stepNumber}>{number}</Text>
                </View>

                {showLine && <View style={isActive ? styles.lineActive : styles.line} />}
            </View>

            {/* Texto debajo */}
            <Text style={[styles.stepLabel, number > 2 ? { marginLeft: 10 } : { marginLeft: 0 }]}>
                {label}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    circle: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: '#ACCCBC',
        justifyContent: 'center',
        alignItems: 'center',
    },

    circleActive: {
        backgroundColor: 'green',
    },

    circleCompleted: {
        backgroundColor: '#4caf50',
    },

    stepNumber: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'MavenProExtraBold',
    },

    line: {
        flex: 1,
        height: 3,
        backgroundColor: '#ACCCBC',
    },

    lineActive: {
        flex: 1,
        height: 3,
        backgroundColor: '#046D3C',
    },

    stepLabel: {
        alignItems: 'center',
        marginTop: 14,
        fontSize: 14,
        fontFamily: 'MavenProMedium',
        color: '#000',
    },
});
