import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { s, vs } from 'react-native-size-matters';
import { AppColors } from '../../styles/colors';
import AppText from '../texts/AppText';
import { AppFonts } from '../../styles/fonts';
import { Ionicons } from '@expo/vector-icons';
import { commonStyles } from '../../styles/sharedStyles';

interface IProductCard {
  imageURL: string;
  title: string;
  price: number;
  onAddToCart: () => void;
}

const ProductCard: FC<IProductCard> = ({
  imageURL,
  title,
  price,
  onAddToCart,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
        <Ionicons name="cart" color={AppColors.white} size={s(15)} />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: imageURL,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <AppText style={styles.titleText}>{title}</AppText>
        <AppText style={styles.priceText}>{price} $</AppText>
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
    ...commonStyles.shadow,
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
  addToCartButton: {
    position: 'absolute',
    width: s(28),
    height: s(28),
    left: 5,
    top: 5,
    backgroundColor: AppColors.primary,
    borderRadius: s(14),
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
