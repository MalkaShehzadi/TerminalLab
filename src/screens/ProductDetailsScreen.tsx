import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProductDetailsScreen({ route }) {
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Text>Product ID: {id}</Text>
      <Text>Details about the product will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
