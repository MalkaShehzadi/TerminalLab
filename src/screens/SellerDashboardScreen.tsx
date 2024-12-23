import React, { useState } from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';

export default function SellerDashboardScreen({ navigation }: any) {
  const [products, setProducts] = useState<any[]>([]);

  const addProduct = () => {
    navigation.navigate('AddProduct', { setProducts });
  };

  return (
    <View style={styles.container}>
      <Button title="Add Product" onPress={addProduct} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Text style={styles.productTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  productCard: { padding: 16, marginBottom: 10, backgroundColor: '#f2f2f2', borderRadius: 5 },
  productTitle: { fontSize: 16, fontWeight: 'bold' },
});
