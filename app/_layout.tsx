import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

const Layout: React.FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<'Home' | 'Details'>('Home');

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'DMBold': require('../assets/fonts/DMSans-Bold.ttf'),
        'DMMedium': require('../assets/fonts/DMSans-Medium.ttf'),
        'DMRegular': require('../assets/fonts/DMSans-Regular.ttf'),
      });
      setFontsLoaded(true);
      SplashScreen.hideAsync();
    };
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  const navigate = (screen: 'Home' | 'Details') => {
    setCurrentScreen(screen);
  };

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
    fontFamily: 'DMBold',
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'DMMedium',
  },
});

export default Layout;
