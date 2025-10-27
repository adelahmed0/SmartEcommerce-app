import { s } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';
import { AppColors } from './colors';

export const sharedPaddingHorizontal = s(12);

export const commonStyles = StyleSheet.create({
  shadow: {
    // IOS
    shadowColor: AppColors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    // Android
    elevation: 6,
  },
});
