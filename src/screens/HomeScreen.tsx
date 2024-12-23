import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import useFetch from '@/hooks/useFetch';

// Define types for navigation
type RootStackParamList = {
  Home: undefined;
  Details: { post: { title: string; body: string } };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <Text style={styles.loading}>Loading...</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Details', { post: item })}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loading: {
    flex: 1,
    textAlign: 'center',
    marginTop: 50,
  },
  itemContainer: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
