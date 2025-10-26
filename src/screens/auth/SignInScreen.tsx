import { StyleSheet, Image } from 'react-native';
import React from 'react';
import AppSafeView from '../../components/views/AppSafeView';
import { sharedPaddingHorizontal } from '../../styles/sharedStyles';
import { IMAGES } from '../../constants/images-paths';
import { s, vs } from 'react-native-size-matters';
import AppTextInputController from '../../components/inputs/AppTextInputController';
import AppText from '../../components/texts/AppText';
import AppButton from '../../components/buttons/AppButton';
import { AppColors } from '../../styles/colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { showMessage } from 'react-native-flash-message';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../store/reducers/userSlice';

const schema = yup
  .object({
    email: yup
      .string()
      .required('Email is required')
      .email('Please enter a valid email address'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const SignInScreen = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useDispatch();

  const handleSignIn = async (formData: FormData) => {
    console.log('Sign In Data:', formData);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );

      console.log(JSON.stringify(userCredential, null, 3));
      navigation.navigate('MainAppBottomTabs');

      const userDataObj = {
        uid: userCredential.user.uid,
      };

      dispatch(setUserData(userDataObj));
    } catch (error: any) {
      let errorMessage =
        'An error occurred while signing in. Please try again.';

      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          break;
        case 'auth/missing-email':
          errorMessage = 'Please enter your email.';
          break;
        case 'auth/missing-password':
          errorMessage = 'Please enter your password.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'No user found with this email.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'This account has been disabled.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many attempts. Please try again later.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Check your internet connection.';
          break;
        case 'auth/invalid-credential':
          errorMessage = 'Invalid credentials. Please try again.';
          break;
      }
      showMessage({
        message: errorMessage,
        type: 'danger',
      });
    }
  };

  return (
    <AppSafeView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInputController
        name="email"
        placeholder="Email"
        control={control}
        keyboardType="email-address"
      />
      <AppTextInputController
        name="password"
        placeholder="Password"
        control={control}
        secureTextEntry
      />
      <AppText style={styles.appName}>Smart E-Commerce</AppText>
      <AppButton title="login" onPress={handleSubmit(handleSignIn)} />
      <AppButton
        title="Sign Up"
        style={styles.registerButton}
        onPress={() => navigation.navigate('SignUpScreen')}
        textColor={AppColors.primary}
      />
    </AppSafeView>
  );
};
export default SignInScreen;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: sharedPaddingHorizontal,
  },
  logo: {
    height: s(150),
    width: s(150),
    marginBottom: vs(30),
  },
  appName: {
    fontSize: s(16),
    fontWeight: '700',
    marginBottom: vs(15),
  },
  registerButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    borderColor: AppColors.primary,
    marginTop: vs(15),
  },
});
