import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { AppColors } from '../../styles/colors';
import AppText from '../texts/AppText';
import { AppFonts } from '../../styles/fonts';

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg',
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <AppText style={styles.titleText}>Product Title</AppText>
        <AppText style={styles.priceText}>$100</AppText>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: s(160),
    height: vs(190),
    backgroundColor: AppColors.white,
    borderRadius: s(10),
    borderWidth: 1,
  },
  imageContainer: {
    overflow: 'hidden',
    borderTopLeftRadius: s(10),
    borderTopRightRadius: s(10),
    height: vs(130),
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 1,
    paddingTop: s(8),
    paddingBottom: vs(15),
    paddingHorizontal: s(10),
  },
  titleText: {
    fontSize: s(14),
    fontFamily: AppFonts.medium,
    color: AppColors.primary,
  },
  priceText: {
    fontSize: s(14),
    fontFamily: AppFonts.bold,
    color: AppColors.primary,
    marginTop: s(7),
  },
});
