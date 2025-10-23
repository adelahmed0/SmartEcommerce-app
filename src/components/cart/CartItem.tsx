import { StyleSheet, View, Image, Pressable } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import AppText from '../texts/AppText';
import { AppFonts } from '../../styles/fonts';
import { AppColors } from '../../styles/colors';
import { AntDesign } from '@expo/vector-icons';

const product = {
  id: 1,
  price: 1199,
  title: 'iPhone 16 Pro Max',
  imageURL:
    'https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg',
};

const CartItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: product.imageURL,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <AppText style={styles.textTitle}>{product.title}</AppText>
        <AppText style={styles.textPrice}>{product.price} EGP</AppText>
      </View>
      <View style={styles.deleteContainer}>
        <Pressable onPress={() => {}} style={styles.deleteButton}>
          <AntDesign name="delete" size={s(14)} color={AppColors.error} />
          <AppText style={styles.deleteText}>Delete</AppText>
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: AppColors.borderColor,
    paddingBottom: vs(10),
  },
  imageContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 3.5,
  },
  deleteContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingEnd: s(12),
  },
  image: {
    width: s(80),
    height: s(80),
    resizeMode: 'cover',
    borderRadius: s(5),
  },
  textTitle: {
    fontSize: s(14),
    fontFamily: AppFonts.medium,
    color: AppColors.primary,
    marginTop: vs(5),
  },
  textPrice: {
    fontSize: s(14),
    fontFamily: AppFonts.bold,
    color: AppColors.primary,
    marginVertical: vs(5),
  },
  deleteText: {
    marginLeft: 7,
    fontFamily: AppFonts.medium,
    color: AppColors.medGray,
    fontSize: s(12),
    marginTop: 3,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
