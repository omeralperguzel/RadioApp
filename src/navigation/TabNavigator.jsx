import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from 'react-native-vector-icons/Feather'

import StackNavigation from './StackNavigation'
import { colors } from '../constants/colors';
import CustomDrawerContent from '../navigation/CustomDrawerContent';
import { fontSize, spacing } from '../constants/dimensions'

import TestHomeStackNavigator from '../../App'
import HomeStackNavigator from '../../App'
import LikeScreen from '../screen/LikeScreen'
import PlayerScreen from '../screen/PlayerScreen'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: {
            backgroundColor: colors.backgroundHeader,
          }, headerShown: false }}>
        <Tab.Screen name="Homepage" component={TestHomeStackNavigator} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={colors.iconPrimary} size={20} />
          )
          }} />
        <Tab.Screen name="List" component={HomeStackNavigator} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={colors.iconPrimary} size={20} />
          )
          }}/>
        <Tab.Screen name="Explore" component={LikeScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="map" color={colors.iconPrimary} size={20} />
          )
          }}/>
        <Tab.Screen name="Setting" component={PlayerScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={colors.iconPrimary} size={20} />
          )
          }}/>
      </Tab.Navigator>
    )
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      //alignItems: 'center', 
      //justifyContent: 'center' 
    },
    headingText: {
      fontSize: fontSize.xlarge,
      color: colors.textPrimary,
      fontFamily: "Gilroy-Bold",
      paddingVertical: spacing.medium,
      paddingHorizontal: spacing.medium,
    }
  })