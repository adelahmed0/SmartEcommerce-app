import { StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppSafeView from '../../components/views/AppSafeView';
import HomeHeader from '../../components/headers/HomeHeader';
import ProductCard from '../../components/cards/ProductCard';
import { s, vs } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/reducers/cartSlice';
import { getProductsData } from '../../config/dataServices';
import { Product } from '../../types/product';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const fetchData = async () => {
    const data = await getProductsData();
    setProducts(data as Product[]);
  };
  useEffect(() => {
    fetchData();
  }, []);
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
            onAddToCart={() => {
              dispatch(addItemToCart(item));
            }}
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
