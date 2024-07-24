import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'Home' | 'Details'>('Home');

  const navigate = (screen: 'Home' | 'Details') => {
    setCurrentScreen(screen);
  };

  SplashScreen.hide();

  return (
    <View style={styles.container}>
      {currentScreen === 'Home' ? (
        <HomeScreen navigate={navigate} />
      ) : (
        <DetailsScreen navigate={navigate} />
      )}
    </View>
  );
};

const HomeScreen: React.FC<{ navigate: (screen: 'Home' | 'Details') => void }> = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigate('Details')}>
        <Text style={styles.buttonText}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const DetailsScreen: React.FC<{ navigate: (screen: 'Home' | 'Details') => void }> = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigate('Home')}>
        <Text style={styles.buttonText}>Go to Home</Text>
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
    fontFamily: 'DMBold', // Use the font family name as specified in the font file
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'DMMedium', // Use the font family name as specified in the font file
  },
});

export default App;
