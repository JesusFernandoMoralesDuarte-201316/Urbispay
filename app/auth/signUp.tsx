import { useRouter } from 'expo-router';
import { Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import "../../global.css";

import LinkPages from '@/components/LinkPages';
import ProgressStep from '@/components/ProgressStep';
import { useEffect, useState } from 'react';


const steps = ["Personal", "Security", "OTP", "Done"];

export default function Index() {

  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  // Estado de los formularios

  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const backScreen = () => {
    router.push('../authScreen/Login')

  }

  useEffect(() => {
    console.log('se renderizo screen SignUp');

    setCurrentStep(0); // o el step inicial que quieras
  }, []);

  return (
    <>

      <View className='bg-white h-full w-full'>

        {/* Titulo y Formulario */}
        <SafeAreaView>
          <View className='h-full w-full'>

            {/* Titulo */}
            <View className='flex items-center'>
              <Text style={styles.title}>Create Account</Text>
            </View>

            <View style={styles.stepsContainer}>
              {steps.map((label, index) => (
                <ProgressStep
                  key={index}
                  number={index + 1}
                  label={label}
                  isActive={index === currentStep}
                  isCompleted={index < currentStep}
                  showLine={index < steps.length - 1}
                />
              ))}
            </View>

            {currentStep === 0 && (
              <>
                <View className='flex items-center mx-4 space-y-4'>
                  {/* <FormInput type='Text' textInit='Full Name' />
                  <FormInput type='Email' textInit='Email' />
                  <FormInput type='Number' textInit='Birthday Year' /> */}
                </View>

              </>
            )}

            {currentStep === 1 && (
              <>
                <View className='flex items-center mx-4 space-y-4'>
                  {/* <FormInput type='Password' textInit='Password' />
                  <FormInput type='Password' textInit='ConfirmPassword' /> */}
                </View>

              </>
            )}

            {currentStep === 2 && (
              <>
                <View className='flex items-center mx-4 space-y-4'>
                  {/* <Text>Ingresa el codigo que se envio a el correo</Text>
                  <FormInput type='Number' textInit='Code' /> */}
                </View>

              </>
            )}

            {currentStep === 3 && (
              <>
                <View className='flex items-center mx-4 space-y-4'>
                  <Text>Registro Existoso</Text>
                </View>

              </>
            )}*/



            <View style={styles.buttons}>

              <TouchableOpacity
                onPress={currentStep === steps.length - 1 ? backScreen : nextStep}
                style={[styles.btnPrimary]}
              >
                <Text style={styles.btnText}>
                  {currentStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={prevStep}
                style={[styles.btnSecondary, currentStep === 0 && styles.btnDisabled, currentStep === steps.length - 1 ? { display: 'none' } : {}]}
                disabled={currentStep === 0}
              >
                <Text style={[styles.btnText]}>Anterior</Text>
              </TouchableOpacity>
            </View>


          </View>
        </SafeAreaView>
      </View>
      <View style={styles.containerWave}>
        <Image
          source={require('../../assets/images/Wave.png')}
          style={styles.wave}
          resizeMode="cover"
        />
      </View>

      <View style={styles.containerSignUp}>
        <Text style={styles.textSignUp}>Do you have an account?</Text>
        <LinkPages text='Login' type='Bold' link='../auth/Login' />
      </View>

    </>
  );
}


const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontFamily: 'MavenProExtraBold',
    color: '#2C8C64',
    marginTop: Platform.OS === 'ios' ? 50 : 70,
    textAlign: 'center',
    marginBottom: 40,
  },


  containerWave: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  wave: {
    width: '100%',
    marginBottom: -10
  },


  containerSignUp: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 57,
    left: Platform.OS === 'ios' ? 93 : 80,
  },

  textSignUp: {
    fontSize: 15,
    color: '#fff',
    marginRight: 10
  },


  stepsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginLeft: 42,
  },

  buttons: { marginTop: 10 },

  btnPrimary: {
    width: Platform.OS === 'ios' ? 320 : 300,
    height: 45,
    backgroundColor: '#2C8C64',
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 40,
    marginTop: 8,
  },

  btnSecondary: {
    width: Platform.OS === 'ios' ? 320 : 300,
    height: 45,
    backgroundColor: '#7A7777',
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 40,
    marginTop: 8,
  },


  btnDisabled: {
    backgroundColor: "#ebebebff",
  },

  btnText: {
    color: '#fff',
    fontFamily: 'MavenProMedium',
    fontSize: 15,
    textAlign: 'center',
  },


});