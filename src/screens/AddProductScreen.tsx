import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddProductScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProduct = () => {
    console.log('New Product:', { title, description });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Product Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Product Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    padding: 8,
    borderRadius: 4,
  },
});
