import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useFetch from '@/hooks/useFetch';

export default function ProductDetailsScreen({ route }: any) {
  const { id } = route.params;
  const { data: product, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (loading) return <Text style={styles.loading}>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.body}>{product.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  loading: { textAlign: 'center', marginTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  body: { fontSize: 16 },
});
