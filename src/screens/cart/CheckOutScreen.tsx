import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppSafeView from '../../components/views/AppSafeView';
import {
  commonStyles,
  sharedPaddingHorizontal,
} from '../../styles/sharedStyles';
import { s, vs } from 'react-native-size-matters';
import { AppColors } from '../../styles/colors';
import AppTextInputController from '../../components/inputs/AppTextInputController';
import AppButton from '../../components/buttons/AppButton';
import { IS_IOS } from '../../constants/constants';
import { FieldValues, useForm } from 'react-hook-form';

const CheckOutScreen = () => {
  const { control, handleSubmit } = useForm({});

  const saveOrder = (formData: FieldValues) => {
    console.log('saveOrder', formData);
  };

  return (
    <AppSafeView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <View style={styles.inputContainer}>
          <AppTextInputController
            name="fullName"
            placeholder="Full Name"
            control={control}
          />
          <AppTextInputController
            name="phoneNumber"
            placeholder="Phone Number"
            control={control}
          />
          <AppTextInputController
            name="detailedAddress"
            placeholder="Detailed Address"
            control={control}
          />
        </View>
      </View>
      <View style={styles.bottomButtonContainer}>
        <AppButton title="Confirm" onPress={handleSubmit(saveOrder)} />
      </View>
    </AppSafeView>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  inputContainer: {
    ...commonStyles.shadow,
    padding: s(8),
    borderRadius: s(8),
    backgroundColor: AppColors.white,
    marginTop: IS_IOS ? vs(15) : 0,
    paddingTop: vs(15),
  },
  bottomButtonContainer: {
    paddingHorizontal: sharedPaddingHorizontal,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: AppColors.lightGray,
    paddingTop: vs(10),
  },
});
