import { View, Text, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useContext } from 'react';
import { CartContext, useCart } from '../providers/CartProvider';
import { FlatList } from 'react-native';
import CartListItem from '../components/CartListItem';

const CartScreen = () => {
  const { items } = useCart();
  return (
    <View>
      <FlatList 
        data={items} 
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{padding:10 , gap: 10}}
        //keyExtractor={(item) => item.id.toString()} // Add a keyExtractor to avoid warnings
      />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

export default CartScreen;
