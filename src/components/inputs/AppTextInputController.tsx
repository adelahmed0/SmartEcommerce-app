import { KeyboardTypeOptions, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import AppTextInput from './AppTextInput';
import { AppColors } from '../../styles/colors';
import AppText from '../texts/AppText';
import { s, vs } from 'react-native-size-matters';

interface AppTextInputControllerProps {
  control: Control<FieldValues>;
  name: string;
  rules?: RegisterOptions<FieldValues>;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

const AppTextInputController: FC<AppTextInputControllerProps> = ({
  control,
  name,
  rules,
  placeholder,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <AppTextInput
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={error && styles.errorInput}
          />
          {error && <AppText style={styles.errorText}>{error.message}</AppText>}
        </>
      )}
    />
  );
};

export default AppTextInputController;

const styles = StyleSheet.create({
  errorInput: {
    borderColor: AppColors.error,
  },
  errorText: {
    color: AppColors.error,
    fontSize: s(12),
    textAlign: 'center',
    marginBottom: vs(10),
    marginTop: -vs(6),
  },
});
