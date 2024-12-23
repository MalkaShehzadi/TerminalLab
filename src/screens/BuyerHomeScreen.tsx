import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useFetch from '@/hooks/useFetch';

export default function BuyerHomeScreen({ navigation }) {
  const { data: products, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <Text>Loading...</Text>;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { id: item.id })}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
