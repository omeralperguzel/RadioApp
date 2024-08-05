import React from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { container } from 'webpack'
import { colors } from '../constants/colors'
import Feather from 'react-native-vector-icons/Feather'
import { iconSizes, spacing, fontSize } from '../constants/dimensions'
import { fontFamilies } from '../constants/fonts'
import ChannelCard from '../components/ChannelCard'
import songs from '../data/songs'
import useLikeSongs from '../store/likeStore'
import { useNavigation } from '@react-navigation/native'

const LikeScreen = () => {
    const navigation = useNavigation();
    const {likedSongs, addToLiked} = useLikeSongs();
    const handleGoBack = () => {
        navigation.goBack();
    }

    const handlePlayTrack = async (selectedTrack, songs = likedSongs) => {
        //const songs = item.songs //Get all songs
        //Make a queue then play songs
        const trackIndex = songs.findIndex(
            (track) => track.url === selectedTrack.url)
        console.log("Playing: ", trackIndex, selectedTrack.title)
        //If track is not found
        if (trackIndex === -1){
            return;
        }
        const beforeTracks = songs.slice(0, trackIndex)
        //console.log("Before Tracks: ", beforeTracks)
        const afterTracks = songs.slice(trackIndex + 1)
        await TrackPlayer.reset()
        await TrackPlayer.add(selectedTrack)
        await TrackPlayer.add(afterTracks)
        await TrackPlayer.add(beforeTracks)

        await TrackPlayer.play()
    } 

    return (
        <View style = {styles.container}>
            <View style = {styles.headerContainer}>
                <TouchableOpacity onPress={handleGoBack}>
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
            data={likedSongs} 
            renderItem = {({item}) => 
            <ChannelCard 
            containerStyle = {{width: "47%"}} 
            imageStyle = {{
                height: 160,
                width: 160,
            }}
            item = {item}
            handlePlay={(item) => {
                handlePlayTrack(item)
            }}
            />}
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