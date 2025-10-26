import { StyleSheet, View } from 'react-native';
import React from 'react';
import ActionSheet from 'react-native-actions-sheet';
import AppText from '../texts/AppText';
import AppButton from '../buttons/AppButton';
import { s } from 'react-native-size-matters';
import { AppColors } from '../../styles/colors';

const LanguageBottomSheet = () => {
  return (
    <ActionSheet id="LANG_SHEET">
      <View style={styles.container}>
        <AppText variant="bold" style={styles.title}>
          Select Language
        </AppText>
        <AppButton title="Confirm" onPress={() => {}} />
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
