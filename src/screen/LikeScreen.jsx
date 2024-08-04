import React from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { container } from 'webpack'
import { colors } from '../constants/colors'
import Feather from 'react-native-vector-icons/Feather'
import { iconSizes, spacing, fontSize } from '../constants/dimensions'
import { fontFamilies } from '../constants/fonts'
import ChannelCard from '../components/ChannelCard'
import songs from '../data/songs'

const LikeScreen = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.headerContainer}>
                <TouchableOpacity>
                    <Feather name = {"arrow-left"} size = {iconSizes.medium} color = {colors.iconPrimary}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name = {"search"} size = {iconSizes.medium} color = {colors.iconPrimary}/>
                </TouchableOpacity>
            </View>
            <FlatList 
            ListHeaderComponent={
                <Text style = {styles.headingText}>Liked Songs</Text>
            }
            data={[1,2,3,4,5,6,7,8,9]} 
            renderItem = {() => <ChannelCard containerStyle = {{width: "47%"}} imageStyle = {{
                height: 160,
                width: 160,
            }}/>}
            numColumns={2} 
            contentContainerStyle = {{
                paddingBottom: 200,
                paddingHorizontal: spacing.medium,
            }}
            columnWrapperStyle = {{
                justifyContent: 'space-between', 
                marginVertical: spacing.large,
            }}
            />
        </View>
    )
}

export default LikeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.medium,
        paddingVertical: spacing.medium,
        paddingTop: spacing.medium,
    },
    headingText: {
        fontSize: fontSize.xlarge,
        color: colors.textPrimary,
        fontFamily: fontFamilies.bold,
    },
})