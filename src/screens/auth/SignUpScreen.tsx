import { StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import AppSafeView from '../../components/views/AppSafeView';
import { sharedPaddingHorizontal } from '../../styles/sharedStyles';
import { IMAGES } from '../../constants/images-paths';
import { s, vs } from 'react-native-size-matters';
import AppTextInput from '../../components/inputs/AppTextInput';
import AppText from '../../components/texts/AppText';
import AppButton from '../../components/buttons/AppButton';
import { AppColors } from '../../styles/colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <AppSafeView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInput
        value={userName}
        onChangeText={setUserName}
        placeholder="User Name"
      />
      <AppTextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <AppTextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <AppText style={styles.appName}>Smart E-Commerce</AppText>
      <AppButton title="Create New Account" onPress={() => {}} />
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
