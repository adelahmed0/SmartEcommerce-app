import { StyleSheet, View, Image, Pressable } from 'react-native';
import React, { FC } from 'react';
import { s, vs } from 'react-native-size-matters';
import AppText from '../texts/AppText';
import { AppFonts } from '../../styles/fonts';
import { AppColors } from '../../styles/colors';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

interface ICartItem {
  title: string;
  price: number | string;
  imageURL: string;
  quantity: number;
  onIncrementPress: () => void;
  onDecrementPress: () => void;
  onDeletePress: () => void;
}

const CartItem: FC<ICartItem> = ({
  title,
  price,
  imageURL,
  quantity,
  onIncrementPress,
  onDecrementPress,
  onDeletePress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: imageURL,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <AppText style={styles.textTitle}>{title}</AppText>
        <AppText style={styles.textPrice}>{price} $</AppText>
        <View style={styles.quantityContainer}>
          <Pressable onPress={onIncrementPress} style={styles.iconButton}>
            <FontAwesome name="plus" size={s(10)} color={AppColors.primary} />
          </Pressable>
          <AppText style={styles.quantityText}>{quantity}</AppText>
          <Pressable onPress={onDecrementPress} style={styles.iconButton}>
            <FontAwesome name="minus" size={s(10)} color={AppColors.primary} />
          </Pressable>
        </View>
      </View>
      <View style={styles.deleteContainer}>
        <Pressable onPress={onDeletePress} style={styles.deleteButton}>
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: s(5),
    borderRadius: s(30),
    borderWidth: s(1),
    borderColor: AppColors.borderColor,
    width: s(80),
    paddingVertical: vs(5),
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.lightGray,
    padding: s(5),
    width: s(20),
    height: s(20),
    borderRadius: s(10),
  },
  quantityText: {
    flex: 1,
    textAlign: 'center',
    color: AppColors.primary,
  },
});
