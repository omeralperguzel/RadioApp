import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home: React.FC<{ navigate?: (screen: 'Home' | 'Details') => void }> = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigate && navigate('Details')}>
        <Text style={styles.buttonText}>Go to Details</Text>
      </TouchableOpacity>
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
    fontFamily: 'DMBold', // Ensure this matches your linked font
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'DMMedium', // Ensure this matches your linked font
  },
});

export default Home;
