import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import StackNavigation from './StackNavigation'
import HomeScreen from '../../App'
import PlayerScreen from '../screen/PlayerScreen';
import LikeScreen from '../screen/LikeScreen';
import { colors } from '../constants/colors';
import CustomDrawerContent from '../navigation/CustomDrawerContent';

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
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="DRAWER_HOME" component={StackNavigation} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;

const styles = StyleSheet.create({})