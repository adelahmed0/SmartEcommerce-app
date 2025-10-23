import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import AppSafeView from '../../components/views/AppSafeView';
import HomeHeader from '../../components/headers/HomeHeader';
import ProductCard from '../../components/cards/ProductCard';
import { products } from '../../data/products';
import { s, vs } from 'react-native-size-matters';

const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      {/* <ProductCard /> */}
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            imageURL={item.imageURL}
            title={item.title}
            price={item.price}
            onAddToCart={() => {}}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: vs(10),
        }}
        contentContainerStyle={{
          paddingHorizontal: s(10),
        }}
      />
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
