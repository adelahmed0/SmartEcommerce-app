import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppSafeView from '../../components/views/AppSafeView';
import HomeHeader from '../../components/headers/HomeHeader';
import EmptyCart from './EmptyCart';
import CartItem from '../../components/cart/CartItem';
import TotalView from '../../components/cart/TotalView';

const CartScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      {/* <EmptyCart /> */}
      <CartItem />
      <TotalView />
    </AppSafeView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
