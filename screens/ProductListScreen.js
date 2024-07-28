// screens/ProductListScreen.js
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../redux/productSlice';
import ProductCard from '../components/ProductCard';
import useFetchProducts from '../hook/useFetchProducts';

export default function ProductListScreen({ navigation }) {
  useFetchProducts();

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const handleSelectProduct = (product) => {
    dispatch(selectProduct(product));
    navigation.navigate('ProductDescription');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => handleSelectProduct(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
