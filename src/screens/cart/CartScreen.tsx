import { StyleSheet, FlatList, View } from 'react-native';
import React from 'react';
import AppSafeView from '../../components/views/AppSafeView';
import HomeHeader from '../../components/headers/HomeHeader';
import EmptyCart from './EmptyCart';
import CartItem from '../../components/cart/CartItem';
import TotalView from '../../components/cart/TotalView';
import { products } from '../../data/products';
import { sharedPaddingHorizontal } from '../../styles/sharedStyles';
import AppButton from '../../components/buttons/AppButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { TAXES, SHIPPING_FEE } from '../../constants/constants';
import {
  removeItemFromCart,
  removeProductFromCart,
  addItemToCart,
} from '../../store/reducers/cartSlice';

const CartScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const { items } = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch();
  const totalProductsPriceSum = items.reduce((acc, item) => acc + item.sum, 0);
  const orderTotal = totalProductsPriceSum + TAXES + SHIPPING_FEE;

  return (
    <AppSafeView>
      <HomeHeader />
      {items.length > 0 ? (
        <View style={{ paddingHorizontal: sharedPaddingHorizontal, flex: 1 }}>
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <CartItem
                {...item}
                price={item.sum}
                onIncrementPress={() => {
                  dispatch(addItemToCart(item));
                }}
                onDecrementPress={() => {
                  dispatch(removeItemFromCart(item));
                }}
                onDeletePress={() => {
                  dispatch(removeProductFromCart(item));
                }}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
          <TotalView
            itemsPrice={totalProductsPriceSum}
            orderTotal={orderTotal}
          />
          <AppButton
            title="Continue"
            onPress={() => navigation.navigate('CheckOutScreen')}
          />
        </View>
      ) : (
        <EmptyCart />
      )}
    </AppSafeView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
