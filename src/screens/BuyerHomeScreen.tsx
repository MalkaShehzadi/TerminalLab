import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useFetch from '@/hooks/useFetch';

export default function BuyerHomeScreen({ navigation }: any) {
  const { data: products, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <Text style={styles.loading}>Loading...</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate('ProductDetails', { id: item.id })}
          >
            <Text style={styles.productTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  loading: { textAlign: 'center', marginTop: 50 },
  productCard: { padding: 16, marginBottom: 10, backgroundColor: '#f2f2f2', borderRadius: 5 },
  productTitle: { fontSize: 16, fontWeight: 'bold' },
});
