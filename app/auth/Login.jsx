import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import "../../global.css";

import { signIn } from 'aws-amplify/auth';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import ButtonLarge from '../../components/ButtonLarge';
import FormInput from '../../components/FormInput';
import LinkPages from '../../components/LinkPages';

export default function Login() {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm();

  const router = useRouter();


  async function handlerSignIn(data) {
    try {
      await signIn({
        username: data.Email,
        password: data.Password
      });
      alert("Login exitoso");
      router.push('../home/home');

    } catch (error) {
      console.log(error.message);
      alert('Error en el login', error.message);
    }
  }

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
  };



  return (
    <>
      <View className="bg-white h-full w-full">
        <View className="h-full w-full">
          <View className="flex items-center">
            <Text style={styles.title}>UrbisPay</Text>
          </View>

          {/* Formulario con Input Email y Password */}
          <View className="flex items-center mx-4 space-y-4">
            <FormInput type="Email" label="Email" control={control} rules={{ required: 'El Email es requerido' }} error={errors.Email?.message} icon='email.png' />
            <FormInput type="Password" label="Password" control={control} rules={{ required: 'El Password es requerido' }} error={errors.Password?.message} icon='password.png' />
            <ButtonLarge text="Login" onPress={handleSubmit(handlerSignIn)} />
          </View>

          {/* Forgot Password */}
          <View style={styles.forgotContainer}>
            <LinkPages text="Forgot Password?" type="Bold" link="../home/home" />
          </View>

        </View>
      </View>
      <View style={styles.containerWave}>
        <Image
          source={require("../../assets/images/Wave.png")}
          style={styles.wave}
          resizeMode="cover"
        />
      </View>

      <View style={styles.containerSignUp}>
        <Text style={styles.textSignUp}>Don't you have an account?</Text>
        <LinkPages text="SignUp" type="Bold" link="../auth/signUp" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontFamily: "MavenProExtraBold",
    color: "#2C8C64",
    marginTop: 170,
    marginLeft: 115,
    marginBottom: 40,
  },
  forgotContainer: {
    flexDirection: "row",
    marginTop: 23,
    justifyContent: "center",
  },
  containerOr: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 23,
    marginBottom: 17,
    textAlign: "center",
  },
  lineIzq: {
    width: 130,
    height: 1,
    backgroundColor: "#ccc",
  },
  lineDer: {
    width: 130,
    height: 1,
    backgroundColor: "#ccc",
  },
  textOr: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#666",
  },
  containerWave: {
    flex: 1,
    justifyContent: "flex-end",
  },
  wave: {
    width: "100%",
    marginBottom: -10,
  },
  containerSignUp: {
    position: "absolute",
    flexDirection: "row",
    bottom: 57,
    left: Platform.OS === "ios" ? 80 : 60,
  },
  textSignUp: {
    fontSize: 15,
    color: "#fff",
    marginRight: 10,
    fontFamily: 'InterMedium'
  },
});