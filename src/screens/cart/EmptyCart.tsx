import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from '../../components/texts/AppText';
import { s, vs } from 'react-native-size-matters';
import { AppFonts } from '../../styles/fonts';
import { AppColors } from '../../styles/colors';
import AppButton from '../../components/buttons/AppButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const EmptyCart = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="shopping-outline"
        size={s(100)}
        color={AppColors.primary}
        style={styles.icon}
      />
      <AppText style={styles.title}>{t('yourCartIsEmpty')}</AppText>
      <AppText style={styles.subTitle}>{t('browseProducts')}</AppText>
      <AppButton
        title={t('startShopping')}
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: s(20),
  },
  title: {
    fontSize: s(24),
    fontFamily: AppFonts.bold,
    color: AppColors.primary,
    marginBottom: vs(10),
  },
  subTitle: {
    fontSize: s(16),
    fontFamily: AppFonts.medium,
    color: AppColors.medGray,
    textAlign: 'center',
    marginBottom: vs(20),
  },
  button: {
    width: '80%',
  },
  icon: {
    marginBottom: vs(20),
    opacity: 0.9,
  },
});
