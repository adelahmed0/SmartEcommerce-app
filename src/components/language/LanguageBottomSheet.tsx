import { StyleSheet, View } from 'react-native';
import React from 'react';
import ActionSheet from 'react-native-actions-sheet';
import AppText from '../texts/AppText';
import AppButton from '../buttons/AppButton';
import { s } from 'react-native-size-matters';
import { AppColors } from '../../styles/colors';
import RadioWithTitle from '../inputs/RadioWithTitle';
import { useTranslation } from 'react-i18next';

const LanguageBottomSheet = () => {
  const { t } = useTranslation();

  return (
    <ActionSheet id="LANG_SHEET">
      <View style={styles.container}>
        <AppText variant="bold" style={styles.title}>
          {t('selectLanguage')}
        </AppText>
        <RadioWithTitle title={t('english')} selected={true} />
        <RadioWithTitle title={t('arabic')} selected={false} />
        <RadioWithTitle title={t('deutsch')} selected={false} />
        <RadioWithTitle title={t('french')} selected={false} />
        <AppButton title={t('confirm')} onPress={() => {}} />
      </View>
    </ActionSheet>
  );
};

export default LanguageBottomSheet;

const styles = StyleSheet.create({
  container: {
    padding: s(16),
  },
  title: {
    fontSize: s(20),
    color: AppColors.primary,
    marginBottom: s(20),
    textAlign: 'center',
  },
});
