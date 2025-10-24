import { KeyboardTypeOptions, StyleSheet } from 'react-native';
import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import AppTextInput from './AppTextInput';
import { AppColors } from '../../styles/colors';
import AppText from '../texts/AppText';
import { s, vs } from 'react-native-size-matters';

interface AppTextInputControllerProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: object;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

const AppTextInputController = <T extends FieldValues>({
  control,
  name,
  rules,
  placeholder,
  secureTextEntry,
  keyboardType,
}: AppTextInputControllerProps<T>) => {
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
