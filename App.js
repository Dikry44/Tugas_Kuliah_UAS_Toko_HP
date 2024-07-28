import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomeScreen from './screens/HomeScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductDescriptionScreen from './screens/ProductDescriptionScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
          <Stack.Screen name="ProductList" component={ProductListScreen} />
          <Stack.Screen name="ProductDescription" component={ProductDescriptionScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
