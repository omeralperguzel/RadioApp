import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import StackNavigation from './StackNavigation'
import HomeScreen from '../../App'
import PlayerScreen from '../screen/PlayerScreen';
import LikeScreen from '../screen/LikeScreen';
import { colors } from '../constants/colors';
import CustomDrawerContent from '../navigation/CustomDrawerContent';
import TabNavigator from './TabNavigator';
import { fontSize } from '../constants/dimensions'
import DrawerStackNavigation from './StackNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator 
        screenOptions={{
            headerShown: true,
            drawerType: 'slide',
            //overlayColor: 'transparent',
            headerStyle: {
                backgroundColor: colors.backgroundHeader,
            },
            headerTintColor: colors.iconPrimary,  
            swipeEdgeWidth: 0,
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="DRAWER_HOME" component = {DrawerStackNavigation} />
            <Drawer.Screen name="BOTTOM_TAB" component = {TabNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;

const styles = StyleSheet.create({})