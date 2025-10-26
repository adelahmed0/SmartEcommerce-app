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
import { useTranslation } from 'react-i18next';

const SignInScreen = () => {
  const { t } = useTranslation();

  const schema = yup
    .object({
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
    defaultValues: {
      email: 'test@app.com',
      password: '12345678',
    },
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
      let errorMessage = t('errors.signInError');

      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = t('errors.invalidEmail');
          break;
        case 'auth/missing-email':
          errorMessage = t('errors.missingEmail');
          break;
        case 'auth/missing-password':
          errorMessage = t('errors.missingPassword');
          break;
        case 'auth/wrong-password':
          errorMessage = t('errors.wrongPassword');
          break;
        case 'auth/user-not-found':
          errorMessage = t('errors.userNotFound');
          break;
        case 'auth/user-disabled':
          errorMessage = t('errors.userDisabled');
          break;
        case 'auth/too-many-requests':
          errorMessage = t('errors.tooManyRequests');
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
      <AppButton title={t('login')} onPress={handleSubmit(handleSignIn)} />
      <AppButton
        title={t('signUp')}
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
