import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";

import { colors } from "../constants/colors";
import { fontSize, iconSizes, spacing } from "../constants/dimensions";
import { fontFamilies } from "../constants/fonts";

import Feather from "react-native-vector-icons/Feather";
import LikeScreen from "../screen/LikeScreen";

const CustomDrawerContent = (props) => {
    const isDarkMode = true;
    const toggleDrawer = () => {
        props.navigation.toggleDrawer();
    }
    
    return (
        <DrawerContentScrollView style = {[styles.container, {backgroundColor: colors.background}]}>
            <View style = {[styles.headerIconContainer, {color: colors.textPrimary}]}>
                <TouchableOpacity onPress={toggleDrawer}>
                    <Feather 
                    name = {"x-circle"} 
                    size = {iconSizes.medium} 
                    color = {colors.iconSecondary}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather 
                    name = {isDarkMode ? "sun" : "moon"} 
                    size = {iconSizes.medium} 
                    color = {colors.iconSecondary}
                    />
                </TouchableOpacity>
            </View>
            <View style = {styles.drawerItemContainer}>
                <DrawerItem 
                label = {"Profile"}
                icon = {() => (
                <Feather 
                name = {"user"} 
                size = {iconSizes.medium} 
                color = {colors.iconSecondary}
                />
            )}
            labelStyle = {styles.labelStyle}
            style = {styles.drawerItem}
            />
            <DrawerItem 
                label = {"Liked Channels"}
                icon = {() => (
                <Feather 
                name = {"heart"} 
                size = {iconSizes.medium} 
                color = {colors.iconSecondary}
                />
            )}
            labelStyle = {styles.labelStyle}
            style = {styles.drawerItem}
            onPress={() => {props.navigation.navigate("LikeScreen")}}
            />
            <DrawerItem 
                label = {"Language"}
                icon = {() => (
                <Feather 
                name = {"globe"} 
                size = {iconSizes.medium} 
                color = {colors.iconSecondary}
                />
            )}
            labelStyle = {styles.labelStyle}
            style = {styles.drawerItem}
            onPress={() => {props.navigation.navigate("LikeScreen")}}
            />
            <DrawerItem 
                label = {"Settings"}
                icon = {() => (
                <Feather 
                name = {"settings"} 
                size = {iconSizes.medium} 
                color = {colors.iconSecondary}
                />
            )}
            labelStyle = {styles.labelStyle}
            style = {styles.drawerItem}
            onPress={() => {props.navigation.navigate("LikeScreen")}}
            />
            </View>
        </DrawerContentScrollView>
    );
    };

export default CustomDrawerContent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        padding: spacing.large,
    },
    headerIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    labelStyle: {
        fontSize: fontSize.medium,
        color: colors.textPrimary,
        fontFamily: fontFamilies.medium,
    },
    drawerItemContainer: {
        marginVertical: spacing.medium,
    },
    drawerItem: {
        marginVertical: spacing.small,
    },
});

 