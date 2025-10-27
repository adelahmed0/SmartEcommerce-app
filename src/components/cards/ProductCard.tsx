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
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={onAddToCart}
        activeOpacity={0.7}
      >
        <Ionicons name="cart" color={AppColors.white} size={s(18)} />
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
        <AppText style={styles.titleText} numberOfLines={2}>
          {title}
        </AppText>
        <AppText style={styles.priceText}>${price}</AppText>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: s(160),
    height: vs(210),
    backgroundColor: AppColors.white,
    borderRadius: s(16),
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    overflow: 'hidden',
    borderTopLeftRadius: s(16),
    borderTopRightRadius: s(16),
    height: vs(140),
    width: '100%',
    backgroundColor: AppColors.white,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 1,
    paddingTop: vs(10),
    paddingBottom: vs(15),
    paddingHorizontal: s(12),
  },
  titleText: {
    fontSize: s(14),
    fontFamily: AppFonts.medium,
    color: AppColors.black,
    marginBottom: s(4),
  },
  priceText: {
    fontSize: s(16),
    fontFamily: AppFonts.bold,
    color: AppColors.primary,
    marginTop: s(4),
  },
  addToCartButton: {
    position: 'absolute',
    width: s(36),
    height: s(36),
    right: 8,
    top: 8,
    backgroundColor: AppColors.secondary,
    borderRadius: s(18),
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: AppColors.secondary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
