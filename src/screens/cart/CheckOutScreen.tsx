import { Alert, StyleSheet, View } from 'react-native';
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
import { IS_IOS, SHIPPING_FEE, TAXES } from '../../constants/constants';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { showMessage } from 'react-native-flash-message';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { emptyCart } from '../../store/reducers/cartSlice';
import { useTranslation } from 'react-i18next';

const CheckOutScreen = () => {
  const { t } = useTranslation();

  const schema = yup
    .object({
      fullName: yup
        .string()
        .required(t('validation.fullNameRequired'))
        .min(3, t('validation.fullNameMinLength')),
      phoneNumber: yup
        .string()
        .required(t('validation.phoneNumberRequired'))
        .matches(/^[0-9]+$/, t('validation.phoneNumberInvalid'))
        .min(10, t('validation.phoneNumberMinLength')),
      detailedAddress: yup
        .string()
        .required(t('validation.detailedAddressRequired'))
        .min(15, t('validation.detailedAddressMinLength')),
    })
    .required();

  type FormData = yup.InferType<typeof schema>;

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useDispatch();

  const { userData } = useSelector((state: RootState) => state.userSlice);
  const { items } = useSelector((state: RootState) => state.cartSlice);
  const totalProductsPriceSum = items.reduce((acc, item) => acc + item.sum, 0);
  const totalPrice = totalProductsPriceSum + TAXES + SHIPPING_FEE;

  const saveOrder = async (formData: FormData) => {
    try {
      const orderBody = {
        ...formData,
        items,
        totalProductsPriceSum,
        createdAt: new Date(),
        totalPrice,
      };

      const userOrdersRef = collection(
        doc(db, 'users', (userData as { uid: string }).uid),
        'orders',
      );
      await addDoc(userOrdersRef, orderBody);

      const orderRef = collection(db, 'orders');
      await addDoc(orderRef, orderBody);

      showMessage({
        message: t('orderSaved'),
        description: t('orderSavedSuccess'),
        type: 'success',
      });

      dispatch(emptyCart());
      navigation.goBack();
    } catch (error) {
      console.log('error', error);
      showMessage({
        message: t('error'),
        description: t('somethingWentWrong'),
        type: 'danger',
      });
    }
  };

  return (
    <AppSafeView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <View style={styles.inputContainer}>
          <AppTextInputController
            name="fullName"
            placeholder={t('fullName')}
            control={control}
          />
          <AppTextInputController
            name="phoneNumber"
            placeholder={t('phoneNumber')}
            control={control}
          />
          <AppTextInputController
            name="detailedAddress"
            placeholder={t('detailedAddress')}
            control={control}
          />
        </View>
      </View>
      <View style={styles.bottomButtonContainer}>
        <AppButton title={t('confirm')} onPress={handleSubmit(saveOrder)} />
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
    borderTopColor: AppColors.borderColor,
    paddingTop: vs(15),
    paddingBottom: vs(15),
    backgroundColor: AppColors.white,
  },
});
