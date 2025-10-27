import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  TouchableOpacityProps,
} from 'react-native';
import AppText from '../texts/AppText';
import { vs, s } from 'react-native-size-matters';
import { AppColors } from '../../styles/colors';

interface AppButtonProps extends TouchableOpacityProps {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle | ViewStyle[];
  styleTitle?: TextStyle | TextStyle[];
  disabled?: boolean;
}

const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  title,
  backgroundColor = AppColors.primary,
  textColor = AppColors.white,
  style = {},
  styleTitle = {},
  disabled = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.button,
        {
          backgroundColor: disabled ? AppColors.disabledGray : backgroundColor,
        },
        style as ViewStyle,
      ]}
      disabled={disabled}
      {...props}
    >
      <AppText
        style={[
          styles.textTitle,
          { color: textColor },
          styleTitle as TextStyle,
        ]}
        variant="bold"
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: vs(48),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: s(12),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textTitle: {
    fontSize: s(16),
    letterSpacing: 0.5,
  },
});
