import React, { act, useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { iconSizes, spacing, fontSize } from '../constants/dimensions'
import { fontFamilies } from '../constants/fonts'
import ChannelCard from '../components/ChannelCard'
import PlayerRepeatToggle from '../components/PlayerRepeatToggle'
import PlayerShuffleToggle from '../components/PlayerShuffleToggle'
import PlayerProgressBar from '../components/PlayerProgressBar'
import { NextButton, PlayPauseButton, PreviousButton } from '../components/PlayerControls'
import TrackPlayer, { useActiveTrack } from 'react-native-track-player'
import { useNavigation, useTheme } from '@react-navigation/native'
import useLikeSongs from '../store/likeStore'
import { isExist } from '../utils'

const imageUrl = "https://cdn.wikirby.com/8/81/Kirby_JP_Twitter_Old_Icon.jpg";

const PlayerScreen = () => {
  
  const {colors} = useTheme();
  const {likedSongs, addToLiked} = useLikeSongs();
  console.log("PlayerScreen/likedSongs: ", likedSongs);

  const navigation = useNavigation();
  const activeTrack = useActiveTrack();
  console.log("PlayerScreen/activeTrack: ", activeTrack);
  
  const isLiked = false;
  const [isMuted, setIsMute] = useState(false);
  
  useEffect(() => {
    setVolume();
  }, []);

  const setVolume = async () => {
    const volume = await TrackPlayer.getVolume();
    setIsMute(volume === 0 ? true : false);
  }

  const handleGoBack = () => {
    navigation.goBack();
  }

  if(!activeTrack){
    return(
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background}}>
        <ActivityIndicator size="large" color={colors.iconPrimary}/>
      </View>
    )
  }

  const handleToggleVolume = () => {
    TrackPlayer.setVolume(isMuted ? 1 : 0); 
    setIsMute(!isMuted);
 }

  return (
    <View style = {styles.container}>
        <View style = {styles.headerContainer}>
            <TouchableOpacity onPress={handleGoBack}>
                <Feather name = {"arrow-left"} size = {iconSizes.medium} color = {colors.iconPrimary}/>
            </TouchableOpacity>
            <Text style = {[styles.headingText, {color: colors.textPrimary}]}>Playing Now</Text>
            <TouchableOpacity>
                <Feather name = {"more-horizontal"} size = {iconSizes.medium} color = {colors.iconPrimary}/>
            </TouchableOpacity>
        </View> 
        <View style = {styles.coverImageContainer}>
          <Image source={{uri: activeTrack.artwork}} style={styles.coverImage}/>
        </View>
        <View style = {styles.titleRowHeartContainer}>
          <View style = {styles.titleContainer}>
            <Text style = {[styles.title, {color: colors.textPrimary}]}>{activeTrack.title}</Text>
            <Text style = {[styles.title2, {color: colors.textSecondary}]}>{activeTrack.artist}</Text>
          </View>
          <TouchableOpacity onPress={() => addToLiked(activeTrack)}> 
            <AntDesign name = {isExist(likedSongs, activeTrack) ? "heart" : "hearto"} size = {iconSizes.medium} color = {colors.iconSecondary}/>
          </TouchableOpacity>
        </View>
        <View style = {styles.playerControlContainer}>
          <TouchableOpacity style = {styles.volumeWrapper} onPress={handleToggleVolume}>
            <Feather name = {isMuted ? "volume-x" : "volume-1"} size = {iconSizes.large} color = {colors.iconSecondary}/>
          </TouchableOpacity> 
          <View style = {styles.repeatShuffleWrapper}>
            <PlayerRepeatToggle />
            <PlayerShuffleToggle />
          </View>         
        </View>
        <View>
          <PlayerProgressBar />
          <View style = {styles.playPauseContainer}>
            <PreviousButton size={iconSizes.large}/>
            <PlayPauseButton size={iconSizes.large}/>
            <NextButton size={iconSizes.large}/>
          </View>
        </View>
    </View>
)
}


export default PlayerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: fontSize.large,
    fontFamily: fontFamilies.bold,
  },
  coverImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.small,
  },
  coverImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleRowHeartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.medium,
  },
  title: {
    fontFamily: fontFamilies.medium,
    textAlign: 'center',
    fontSize: fontSize.large,
    paddingVertical: spacing.small,
  },
  title2: {
    fontFamily: fontFamilies.regular,
    textAlign: 'center',
    fontSize: fontSize.medium,
  },
  playerControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.medium,
    marginVertical: spacing.large,
  },
  volumeWrapper: {
    flex: 1,
  },
  repeatShuffleWrapper: {
    flexDirection: 'row',
    gap: spacing.medium,
  },
  playPauseContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.large,
    paddingTop: 15,
    //marginTop: spacing.xlarge,
  },
})