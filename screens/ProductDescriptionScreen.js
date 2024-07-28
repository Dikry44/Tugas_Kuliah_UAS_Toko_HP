// screens/ProductDescriptionScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import RenderHtml from 'react-native-render-html';

export default function ProductDescriptionScreen({ navigation }) {
  const selectedProduct = useSelector((state) => state.products.selectedProduct);

  if (!selectedProduct) {
    return (
      <View style={styles.container}>
        <Text>No product selected</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedProduct.image }} style={styles.image} />
      <Text style={styles.name}>{selectedProduct.name}</Text>
      <Text style={styles.status}>Status: {selectedProduct.status}</Text>
      <RenderHtml
        contentWidth={styles.container.width}
        source={{ html: selectedProduct.content }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProductDetail')}
      >
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Buying product successful!')}
      >
        <Text style={styles.buttonText}>Buy</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  status: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
