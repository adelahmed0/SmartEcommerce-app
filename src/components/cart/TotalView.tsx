import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { s, vs } from 'react-native-size-matters';
import AppText from '../texts/AppText';
import { AppColors } from '../../styles/colors';
import { SHIPPING_FEE, TAXES } from '../../constants/constants';
import { useTranslation } from 'react-i18next';

interface ITotalView {
  itemsPrice: number;
  orderTotal: number;
}

const TotalView: FC<ITotalView> = ({ itemsPrice, orderTotal }) => {
  const { t } = useTranslation();

  return (
    <View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>{t('itemsPrice')}</AppText>
        <AppText style={styles.textPrice}>${itemsPrice}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>{t('shippingFee')}</AppText>
        <AppText style={styles.textPrice}>${SHIPPING_FEE}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>{t('tax')}</AppText>
        <AppText style={styles.textPrice}>${TAXES}</AppText>
      </View>
      <View style={styles.separator} />
      <View style={styles.row}>
        <AppText style={styles.textTitle}>{t('orderTotal')}</AppText>
        <AppText style={styles.textPrice}>${orderTotal}</AppText>
      </View>
    </View>
  );
};

export default TotalView;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: vs(10),
  },
  textTitle: {
    fontSize: s(16),
    flex: 1,
  },
  textPrice: {
    fontSize: s(16),
    color: AppColors.primary,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: AppColors.borderColor,
    marginVertical: vs(5),
  },
});
