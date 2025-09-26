import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import "../../global.css";

import { confirmSignUp, signUp } from 'aws-amplify/auth';


import { useEffect, useState } from 'react';
import ButtonLarge from '../../components/ButtonLarge';
import FormInput from '../../components/FormInput';
import FormInputSmall from '../../components/FormInputSmall';
import LinkPages from '../../components/LinkPages';
import ProgressStep from '../../components/ProgressStep';

const steps = ["Personal", "Security", "OTP", "Done"];

export default function SignUp() {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm();

  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const backScreen = () => {
    router.push('../auth/Login')

  }

  useEffect(() => { setCurrentStep(0) }, []);

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
    nextStep(); // Avanza al siguiente paso si los datos son válidos
  };

  async function handleSignUpConfirmation(data) {
    try {
      await confirmSignUp({
        username: data.Email,
        confirmationCode: data.Code
      });

      alert("Usuario confirmado:", data.Email);
      nextStep();

    } catch (error) {
      alert('error confirming sign up', error);
    }
  }


  const handlerSignUp = async (data) => {
    try {
      await signUp({
        username: data.Email,
        password: data.Password,
        attributes: {
          email: data.Email,
        },
      });
      alert("Usuario registrado. Revisa tu correo para confirmar.");
      nextStep();
    } catch (err) {
      alert("Error en signup: " + err.message);
    }
  };

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

                  <FormInput
                    type='text'
                    label='fullName'
                    control={control}
                    rules={{ required: 'El Nombre es requerido' }}
                    error={errors.fullName?.message}
                    icon='user.png'>
                  </FormInput>

                  <FormInput
                    type='email'
                    label='Email'
                    control={control}
                    rules={{ required: 'El Email es requerido' }}
                    error={errors.Email?.message}
                    icon='email.png'>
                  </FormInput>

                  <View style={styles.FormInputsSmall}>
                    <FormInputSmall
                      type='text'
                      label='Gender'
                      control={control}
                      rules={{ required: 'El Género es requerido' }}
                      error={errors.Gender?.message}
                      icon='gender.png'>
                    </FormInputSmall>
                    <FormInputSmall
                      type='number'
                      label='Birthday'
                      control={control}
                      rules={{ required: 'El Año de Nacimiento es requerido' }}
                      error={errors.Birthday?.message}
                      icon='calendar.png'>
                    </FormInputSmall>
                  </View>
                  <FormInput
                    type='number'
                    label='PhoneNumber'
                    control={control}
                    rules={{ required: 'El Número de Teléfono es requerido' }}
                    error={errors.PhoneNumber?.message}
                    icon='phone.png'>
                  </FormInput>

                  <ButtonLarge
                    text='Siguiente'
                    onPress={handleSubmit(onSubmit)}
                  />
                </View>
              </>
            )}

            {currentStep === 1 && (
              <>
                <View className='flex items-center mx-4 space-y-4'>
                  {/* Campo de contraseña */}
                  <FormInput
                    type='Password'
                    label='Password'
                    control={control}
                    rules={{
                      required: 'La Contraseña es requerida',
                      minLength: {
                        value: 8,
                        message: 'La Contraseña debe tener al menos 8 caracteres',
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]+$/,
                        message:
                          'La Contraseña debe incluir mayúsculas, minúsculas, números y símbolos',
                      },
                    }}
                    error={errors.Password?.message}
                    icon='password.png'
                  />

                  {/* Campo de confirmación de contraseña */}
                  <FormInput
                    type='Password'
                    label='ConfirmPassword'
                    control={control}
                    rules={{
                      required: 'La Confirmación de Contraseña es requerida',
                      validate: (value) =>
                        value === getValues('Password') || 'Las contraseñas no coinciden',
                    }}
                    error={errors.ConfirmPassword?.message}
                    icon='password.png'
                  />

                  {/* Botones */}
                  <ButtonLarge text='Siguiente' onPress={handleSubmit(handlerSignUp)} style={{ marginBottom: 20 }} />
                  <ButtonLarge text='Volver' onPress={prevStep} type='secondary' />
                </View>

              </>
            )}

            {currentStep === 2 && (
              <>
                <View className='flex items-center mx-4 space-y-4'>
                  <Text style={styles.textOTP}>Ingresa el <Text style={{ color: '#046D3C' }}>código</Text> que fue enviado a: <Text style={{ color: '#046D3C' }}>correo@test.com</Text></Text>
                  <FormInput
                    type='number'
                    label='Code'
                    control={control}
                    rules={{ required: 'El Código es requerido' }}
                    error={errors.Code?.message}
                    icon='code.png'
                  />
                  <Text style={styles.textOTPResend}>¿No recibiste el código? <Text style={{ color: '#2C8C64', fontFamily: 'InterBlack' }}>Reenviar código</Text></Text>
                  <ButtonLarge
                    text='Siguiente'
                    onPress={handleSubmit(handleSignUpConfirmation)}
                    style={{ marginBottom: 20 }}
                  />
                  <ButtonLarge
                    text='Volver'
                    onPress={prevStep}
                    type='secondary' />
                </View>

              </>
            )}


            {currentStep === 3 && (
              <>
                <View className='flex items-center mx-4 space-y-4'>
                  <Text style={{ fontFamily: 'InterBold', fontSize: 30, textAlign: 'center', marginBottom: 15 }}>Felicidades</Text>
                  <Text style={{ fontFamily: 'InterExtraBold', fontSize: 15, textAlign: 'center', color: '#046D3C' }}>Usuario creado con exito</Text>
                  <Image
                    source={require('../../assets/images/Felicidades.png')}
                    style={{ width: 150, height: 150, alignSelf: 'center', marginTop: 35, marginBottom: 20 }}
                  />

                  <ButtonLarge
                    text='Finalizar'
                    onPress={backScreen}
                  />
                </View>

              </>
            )}


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

  FormInputsSmall: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
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

  textOTP: {
    fontFamily: 'InterExtraBold',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
  },

  textOTPResend: {
    fontFamily: 'InterRegular',
    fontSize: 12,
    color: '#2C8C64',
    textAlign: 'center',
  },




});