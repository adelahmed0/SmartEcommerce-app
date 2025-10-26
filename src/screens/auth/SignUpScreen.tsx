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
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { showMessage } from 'react-native-flash-message';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../store/reducers/userSlice';

const schema = yup
  .object({
    userName: yup
      .string()
      .required('User Name is required')
      .min(3, 'User Name must be at least 3 characters')
      .max(20, 'User Name must be less than 20 characters'),
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

const SignUpScreen = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useDispatch();

  const handleSignUp = async (formData: FormData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );
      console.log('Sign Up Success:', userCredential);
      navigation.navigate('MainAppBottomTabs');
      dispatch(setUserData(userCredential.user));
    } catch (error: any) {
      let errorMessage =
        'An error occurred while signing up. Please try again.';
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email already in use. Please use a different email.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email. Please enter a valid email address.';
          break;
        case 'auth/weak-password':
          errorMessage =
            'Password is too weak. Please enter a stronger password.';
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
        name="userName"
        placeholder="User Name"
        control={control}
      />
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
      <AppButton
        title="Create New Account"
        onPress={handleSubmit(handleSignUp)}
      />
      <AppButton
        title="Go To Sign In"
        style={styles.signInButton}
        onPress={() => navigation.navigate('SignInScreen')}
        textColor={AppColors.primary}
      />
    </AppSafeView>
  );
};
export default SignUpScreen;
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
  signInButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    borderColor: AppColors.primary,
    marginTop: vs(15),
  },
});
