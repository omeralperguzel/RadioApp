import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListScreen: React.FC = () => {
  const data = [
    { key: 'Devin' },
    { key: 'Dan' },
    { key: 'Dominic' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List Screen</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'DMBold',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    fontFamily: 'DMRegular',
  },
});

export default ListScreen;
