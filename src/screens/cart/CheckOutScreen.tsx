import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import AppSafeView from '../../components/views/AppSafeView';
import {
  commonStyles,
  sharedPaddingHorizontal,
} from '../../styles/sharedStyles';
import { s, vs } from 'react-native-size-matters';
import { AppColors } from '../../styles/colors';
import AppTextInput from '../../components/inputs/AppTextInput';
import AppButton from '../../components/buttons/AppButton';
import { IS_IOS } from '../../constants/constants';

const CheckOutScreen = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [detailedAddress, setDetailedAddress] = useState('');
  return (
    <AppSafeView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <View style={styles.inputContainer}>
          <AppTextInput
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          <AppTextInput
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <AppTextInput
            placeholder="Detailed Address"
            value={detailedAddress}
            onChangeText={setDetailedAddress}
          />
        </View>
      </View>
      <View style={styles.bottomButtonContainer}>
        <AppButton title="Confirm" onPress={() => {}} />
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
