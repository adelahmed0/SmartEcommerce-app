import React, { FC } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
} from 'react-native';
import { vs, s } from 'react-native-size-matters';
import { AppColors } from '../../styles/colors';

interface AppTextInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  style?: StyleProp<TextStyle>;
}

const AppTextInput: FC<AppTextInputProps> = ({
  value,
  onChangeText,
  style,
  placeholder,
  secureTextEntry,
  keyboardType,
  ...props
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={[styles.input, style]}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      {...props}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  input: {
    height: vs(40),
    borderRadius: s(25),
    borderWidth: 1,
    borderColor: AppColors.borderColor,
    paddingHorizontal: s(15),
    fontSize: s(16),
    backgroundColor: AppColors.white,
    width: '100%',
    marginBottom: vs(10),
  },
});
