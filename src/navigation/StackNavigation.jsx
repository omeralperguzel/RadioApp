import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import HomeScreen from '../screen/HomeScreen'
import DetailsScreen from '../../App'
import PlayerScreen from '../screen/PlayerScreen'
import LikeScreen from '../screen/LikeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Player" component={PlayerScreen} />
            <Stack.Screen name="Like" component={LikeScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})