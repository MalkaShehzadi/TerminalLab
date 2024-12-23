import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SellerDashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Seller Dashboard</Text>
      <Button title="Add Product" onPress={() => navigation.navigate('AddProduct')} />
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
