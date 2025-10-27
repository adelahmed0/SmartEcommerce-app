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
      <View
        style={[
          styles.row,
          {
            backgroundColor: AppColors.lightGray,
            padding: s(12),
            borderRadius: s(10),
            marginTop: vs(8),
          },
        ]}
      >
        <AppText
          style={[
            styles.textTitle,
            { fontSize: s(18), color: AppColors.black },
          ]}
        >
          {t('orderTotal')}
        </AppText>
        <AppText style={[styles.textPrice, { fontSize: s(20) }]}>
          ${orderTotal}
        </AppText>
      </View>
    </View>
  );
};

export default TotalView;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: vs(12),
    paddingVertical: vs(4),
  },
  textTitle: {
    fontSize: s(16),
    flex: 1,
    color: AppColors.medGray,
  },
  textPrice: {
    fontSize: s(18),
    color: AppColors.secondary,
    fontWeight: 'bold',
  },
  separator: {
    height: 1.5,
    width: '100%',
    backgroundColor: AppColors.borderColor,
    marginVertical: vs(8),
  },
});
