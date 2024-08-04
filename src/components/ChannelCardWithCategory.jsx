import React from 'react';
import { FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {spacing} from '../constants/dimensions';
import ChannelCard from './ChannelCard';
import { fontSize } from '../constants/dimensions';
import { colors } from '../constants/colors';
import TrackPlayer from 'react-native-track-player';

const ChannelCardWithCategory = ({item}) => {
    const handlePlayTrack = async (selectedTrack, songs = item.songs) => {
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
            <Text style = {styles.headingText}>{item.title}</Text>
            <FlatList 
            data={item.songs} 
            renderItem={({item}) => (
            <ChannelCard item = {item} 
            handlePlay = {(selectedTrack) => {
                console.log("(handlePlayTrack) Playing: ", selectedTrack.url),
                handlePlayTrack(selectedTrack)
            }}/>
            )}  
            horizontal={true}
            ItemSeparatorComponent={<View style = {{marginHorizontal: spacing.small}}/>}
            contentContainerStyle = {{paddingHorizontal: spacing.large}}
      />
        </View>
    )
}

export default ChannelCardWithCategory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headingText: {
        fontSize: fontSize.xlarge,
        color: colors.textPrimary,
        fontFamily: "Gilroy-Bold",
        paddingVertical: spacing.medium,
        paddingHorizontal: spacing.medium,
      }
});