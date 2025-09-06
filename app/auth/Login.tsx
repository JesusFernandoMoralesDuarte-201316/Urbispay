import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import "../../global.css";

import ButtonLarge from '@/components/ButtonLarge';
import ButtonSocialNetwork from '@/components/ButtonSocialNetwork';
import FormInput, { IFormValues } from '@/components/FormInput';
import LinkPages from '@/components/LinkPages';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm<IFormValues>();

  const onSubmit = (data: IFormValues) => {
    console.log("Form data:", data);
  };

  console.log("Current form values:", getValues());

  return (
    <>
      <View className="bg-white h-full w-full">
        <SafeAreaView>
          <View className="h-full w-full">
            <View className="flex items-center">
              <Text style={styles.title}>UrbisPay</Text>
            </View>

            {/* Formulario con Input Email y Password */}
            <View className="flex items-center mx-4 space-y-4">
              <FormInput type="Email" label="Email" control={control} rules={{ required: 'El Email es requerido' }} error={errors.Email?.message} icon='email.png' />
              <FormInput type="Password" label="Password" control={control} rules={{ required: 'El Password es requerido' }} error={errors.Password?.message} icon='password.png' />
              <ButtonLarge text="Login" onPress={handleSubmit(onSubmit)} />
            </View>

            {/* Forgot Password */}
            <View style={styles.forgotContainer}>
              <LinkPages text="Forgot Password?" type="Bold" link="../signUp" />
            </View>

            {/* Line OR */}
            <View style={styles.containerOr}>
              <View style={styles.lineIzq} />
              <Text style={styles.textOr}>or</Text>
              <View style={styles.lineDer} />
            </View>

            {/* Button Social Networks */}
            <ButtonSocialNetwork text="Continue with Google" imageName="google.png" />
            <ButtonSocialNetwork text="Continue with Facebook" imageName="facebook.png" />
          </View>
        </SafeAreaView>
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
    marginTop: Platform.OS === "ios" ? 50 : 70,
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