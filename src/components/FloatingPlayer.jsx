import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { container } from 'webpack';
import { colors } from '../constants/colors';
import { fontSize, iconSizes, spacing } from '../constants/dimensions';
import { NextButton, PlayPauseButton, PreviousButton } from './PlayerControls';

const imageUrl = "https://cdn.wikirby.com/8/81/Kirby_JP_Twitter_Old_Icon.jpg";
const FloatingPlayer = () => {
    return (
        <View style={styles.container}>
            <Image source={{uri: imageUrl}} style={styles.coverImage}/>
            <View style = {styles.titleContainer}>
                <Text style = {styles.title}>Channel Name</Text>
                <Text style = {styles.titleSecondary}>Kirby</Text>
            </View>
            <View style = {styles.playerControlContainer}>
                <PreviousButton size={iconSizes.medium}/>
                <PlayPauseButton size={iconSizes.medium}/>
                <NextButton size={iconSizes.medium}/>
            </View>
        </View>
    )
}

export default FloatingPlayer;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.backgroundPlayer,
        alignItems: 'center',
        height: 80,
    },
    coverImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        left: 10,
    },
    titleContainer: {
        flex: 1,
        left: 18,
        paddingHorizontal: spacing.small,
    },
    title: {
        color: colors.textPrimary,
        fontSize: fontSize.large,
        //fontFamily: "Gilroy-Bold",
    },
    titleSecondary: {
        color: colors.textSecondary,
        fontSize: fontSize.medium,
        fontFamily: "Gilroy-Medium",
    },
    playerControlContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing.medium,
        gap: 20, 
    },
});
