import React from 'react';
import { View, StyleSheet, Text, AppRegistry } from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

const App = () => {
    return (
        <View style>
            <Text>Hello World!</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default App;