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
import { useTranslation } from 'react-i18next';

const SignUpScreen = () => {
  const { t } = useTranslation();

  const schema = yup
    .object({
      userName: yup
        .string()
        .required(t('validation.userNameRequired'))
        .min(3, t('validation.userNameMinLength'))
        .max(20, t('validation.userNameMaxLength')),
      email: yup
        .string()
        .required(t('validation.emailRequired'))
        .email(t('validation.emailInvalid')),
      password: yup
        .string()
        .required(t('validation.passwordRequired'))
        .min(6, t('validation.passwordMinLength')),
    })
    .required();

  type FormData = yup.InferType<typeof schema>;

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
      const userDataObj = {
        uid: userCredential.user.uid,
      };
      dispatch(setUserData(userDataObj));
    } catch (error: any) {
      let errorMessage = t('errors.signUpError');
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = t('errors.emailAlreadyInUse');
          break;
        case 'auth/invalid-email':
          errorMessage = t('errors.invalidEmail');
          break;
        case 'auth/weak-password':
          errorMessage = t('errors.weakPassword');
          break;
        case 'auth/network-request-failed':
          errorMessage = t('errors.networkError');
          break;
        case 'auth/invalid-credential':
          errorMessage = t('errors.invalidCredential');
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
        placeholder={t('userName')}
        control={control}
      />
      <AppTextInputController
        name="email"
        placeholder={t('email')}
        control={control}
        keyboardType="email-address"
      />
      <AppTextInputController
        name="password"
        placeholder={t('password')}
        control={control}
        secureTextEntry
      />
      <AppText style={styles.appName}>{t('appName')}</AppText>
      <AppButton
        title={t('createNewAccount')}
        onPress={handleSubmit(handleSignUp)}
      />
      <AppButton
        title={t('goToSignIn')}
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
