import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#8e2de2', '#f3a712']}
      style={styles.container}
    >
      <Text style={styles.title}>Welcome to The Phone Shop</Text>
      <TouchableOpacity 
        style={styles.buttonWrapper} 
        onPress={() => navigation.navigate('ProductList')}
      >
        <LinearGradient
          colors={['#6a11cb', '#2575fc']}
          style={styles.button}
        >
          <Text style={styles.buttonText}>List Products</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
