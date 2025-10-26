import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppSafeView from '../../components/views/AppSafeView';
import HomeHeader from '../../components/headers/HomeHeader';
import ProfileSectionButton from '../../components/buttons/ProfileSectionButton';
import { sharedPaddingHorizontal } from '../../styles/sharedStyles';
import AppText from '../../components/texts/AppText';
import { s, vs } from 'react-native-size-matters';
import { AppFonts } from '../../styles/fonts';
import { AppColors } from '../../styles/colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SheetManager } from 'react-native-actions-sheet';
import LanguageBottomSheet from '../../components/language/LanguageBottomSheet';
import { useTranslation } from 'react-i18next';

const ProfileScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <AppSafeView>
      <HomeHeader />
      <AppText variant="bold" style={styles.helloText}>
        {t('hello')}, {t('user')}
      </AppText>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <ProfileSectionButton
          onPress={() => navigation.navigate('MyOrdersScreen')}
          title={t('myOrders')}
        />
        <ProfileSectionButton
          onPress={() => SheetManager.show('LANG_SHEET')}
          title={t('language')}
        />
        <LanguageBottomSheet />
        <ProfileSectionButton onPress={() => {}} title={t('logout')} />
      </View>
    </AppSafeView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  helloText: {
    fontSize: s(18),
    color: AppColors.primary,
    fontFamily: AppFonts.bold,
    marginTop: vs(10),
    marginHorizontal: sharedPaddingHorizontal,
  },
});
