import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { colors } from '../constants/colors'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { iconSizes, spacing, fontSize } from '../constants/dimensions'
import { fontFamilies } from '../constants/fonts'
import ChannelCard from '../components/ChannelCard'
import PlayerRepeatToggle from '../components/PlayerRepeatToggle'
import PlayerShuffleToggle from '../components/PlayerShuffleToggle'

const imageUrl = "https://cdn.wikirby.com/8/81/Kirby_JP_Twitter_Old_Icon.jpg";

const PlayerScreen = () => {
  const isLiked = false;
  const isMuted = false;

  return (
    <View style = {styles.container}>
        <View style = {styles.headerContainer}>
            <TouchableOpacity>
                <Feather name = {"arrow-left"} size = {iconSizes.medium} color = {colors.iconPrimary}/>
            </TouchableOpacity>
            <Text style = {styles.headingText}>Playing Now</Text>
            <TouchableOpacity>
                <Feather name = {"more-horizontal"} size = {iconSizes.medium} color = {colors.iconPrimary}/>
            </TouchableOpacity>
        </View> 
        <View style = {styles.coverImageContainer}>
          <Image source={{uri: imageUrl}} style={styles.coverImage}/>
        </View>
        <View style = {styles.titleRowHeartContainer}>
          <View style = {styles.titleContainer}>
            <Text style = {styles.title}>Masked Dedede - Kirby Triple Deluxe Music Extended</Text>
            <Text style = {styles.title2}>Kirby</Text>
          </View>
          <TouchableOpacity>
            <AntDesign name = {isLiked ? "heart" : "hearto"} size = {iconSizes.medium} color = {colors.iconSecondary}/>
          </TouchableOpacity>
        </View>
        <View style = {styles.playerControlContainer}>
          <TouchableOpacity style = {styles.volumeWrapper}>
            <Feather name = {isMuted ? "volume-x" : "volume-1"} size = {iconSizes.large} color = {colors.iconSecondary}/>
          </TouchableOpacity> 
          <View style = {styles.repeatShuffleWrapper}>
            <PlayerRepeatToggle />
            <PlayerShuffleToggle />
          </View>         
        </View>
    </View>
)
}

export default PlayerScreen

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
    fontSize: fontSize.large,
    color: colors.textPrimary,
    fontFamily: fontFamilies.bold,
  },
  coverImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.xlarge,
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
    color: colors.textPrimary,
    fontFamily: fontFamilies.medium,
    textAlign: 'center',
    fontSize: fontSize.large,
    paddingVertical: spacing.small,
  },
  title2: {
    color: colors.textSecondary,
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
})