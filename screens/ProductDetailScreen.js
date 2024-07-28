import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { sampleProducts } from '../Sample/productData';

export default function ProductDetailScreen() {
  const selectedProduct = useSelector((state) => state.products.selectedProduct);

  if (!selectedProduct) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No product selected</Text>
      </View>
    );
  }

  const product = sampleProducts.find((p) => p.id === selectedProduct.id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Product not found</Text> 
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.detail}>Name: {product.name}</Text>
      <Text style={styles.detail}>Status: {product.status}</Text>
      <Text style={styles.detail}>Brand: {product.brand}</Text>
      <Text style={styles.detail}>Type: {product.type}</Text>
      <Text style={styles.detail}>Price: {product.price}</Text>
      <Text style={styles.detail}>Expedition: {product.expedition}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Buy product successful!')}
      >
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  detail: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
