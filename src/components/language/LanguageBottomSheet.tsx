import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import AppText from '../texts/AppText';
import AppButton from '../buttons/AppButton';
import { s } from 'react-native-size-matters';
import { AppColors } from '../../styles/colors';
import RadioWithTitle from '../inputs/RadioWithTitle';
import { useTranslation } from 'react-i18next';
import i18n from '../../localization/i18n';

const languages = [
  {
    name: 'English',
    value: 'en',
  },
  {
    name: 'Arabic',
    value: 'ar',
  },
  {
    name: 'Deutsch',
    value: 'de',
  },
  {
    name: 'French',
    value: 'fr',
  },
];

const LanguageBottomSheet = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  const handleConfirm = () => {
    i18n.changeLanguage(selectedLanguage);
    SheetManager.hide('LANG_SHEET');
  };

  return (
    <ActionSheet id="LANG_SHEET">
      <View style={styles.container}>
        <AppText variant="bold" style={styles.title}>
          {t('selectLanguage')}
        </AppText>
        {languages.map((language) => (
          <RadioWithTitle
            key={language.value}
            title={language.name}
            selected={language.value === selectedLanguage}
            onPress={() => handleLanguageChange(language.value)}
          />
        ))}
        <AppButton title={t('confirm')} onPress={handleConfirm} />
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
