import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const verticalData = [
  { id: '1', title: 'Vertical Item 1' },
  { id: '2', title: 'Vertical Item 2' },
  { id: '3', title: 'Vertical Item 3' },
  { id: '4', title: 'Vertical Item 4' },
  { id: '5', title: 'Vertical Item 5' },
  { id: '6', title: 'Vertical Item 5' },
  { id: '7', title: 'Vertical Item 5' },
  { id: '8', title: 'Vertical Item 5' },
  { id: '9', title: 'Vertical Item 5' },
  { id: '10', title: 'Vertical Item 5' },
  { id: '11', title: 'Vertical Item 5' },
  { id: '12', title: 'Vertical Item 5' },
];

const Vertical = () => {
  return (
    <FlatList
      data={verticalData}
      ListHeaderComponent={() => (
        <View style={styles.header}>
          <Text style={styles.headerText}>Vertical List</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
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

export default Vertical;
