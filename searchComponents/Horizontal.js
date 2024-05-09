import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const horizontalData = [
  { id: '1', title: 'Horizontal Item 1' },
  { id: '2', title: 'Horizontal Item 2' },
  { id: '3', title: 'Horizontal Item 3' },
  { id: '4', title: 'Horizontal Item 4' },
  { id: '5', title: 'Horizontal Item 5' },
];

const Horizontal = () => {
  return (
    <FlatList
      data={horizontalData}
      ListHeaderComponent={() => (
        <View style={styles.header}>
          <Text style={styles.headerText}>Visiter nos hotels</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
  },
});

export default Horizontal;
