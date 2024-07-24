import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

console.log('Yep, I am here!');

const Index = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Index Page</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to List"
        onPress={() => navigation.navigate('List')}
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
  text: {
    fontSize: 18,
  },
});

export default Index;
