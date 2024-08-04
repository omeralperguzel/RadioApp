import React, { act } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { colors } from '../constants/colors';
import { fontSize, iconSizes, spacing } from '../constants/dimensions';
import { NextButton, PlayPauseButton, PreviousButton } from './PlayerControls';
import { SlideInRight, useSharedValue } from 'react-native-reanimated';
import {Slider} from "react-native-awesome-slider";
import MovingText from './MovingText';
import PlayerScreen from '../screen/PlayerScreen';
import { useNavigation } from '@react-navigation/native';
import {TrackPlayer, useActiveTrack} from 'react-native-track-player';

const imageUrl = "https://cdn.wikirby.com/8/81/Kirby_JP_Twitter_Old_Icon.jpg";
const FloatingPlayer = () => {
    const navigation = useNavigation();
    const activeTrack = useActiveTrack();

    const progress = useSharedValue(0.30);
    const min = useSharedValue(0);
    const max = useSharedValue(1);

    const isSliding = useSharedValue(false);

    const handleOpenPlayerScreen = () => {
        navigation.navigate("PlayerScreen");
    }

    if(!activeTrack){
        return(
          <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background}}>
            <ActivityIndicator size="large" color={colors.iconPrimary}/>
          </View>
        )
      }

    return (
        <View>
            <View style={{zIndex: 1,}}>
                <Slider style={styles.sliderContainer}
                progress={progress}
                minimumValue={min}
                maximumValue={max}
                theme = {{
                    //disableMinTrackTintColor: "#fff",
                    maximumTrackTintColor: colors.maximumTintColor,
                    minimumTrackTintColor: colors.minimumTintColor,
                    //cacheTrackTintColor: "#333",
                    //bubbleBackgroundColor: "#666",
                    //hearthbeatColor: "#999",
                }}
                containerStyle={{
                    height: 5,
                    borderRadius: 10,
                    backgroundColor: colors.backgroundPlayer,
                }}
                /*renderBubble={() => <View>
                    <Text>This bubble is working</Text>
                </View>}*/
                renderThumb={() => {
                    <View style = {{backgroundColor: "red"}}></View>;
                }}
                onSlidingStart={() => (isSliding.value = true)}
                onValueChange={async (value) => {
                    await TrackPlayer.seekTo(value * duration);
                }}
                onSlidingComplete={async (value) => {
                    if (!isSliding.value){
                        return;
                    }
                    isSliding.value = false;
                    await TrackPlayer.seekTo(value * duration);
                }}
                />
            </View>
            <TouchableOpacity 
            style={styles.container} 
            activeOpacity={0.85} 
            onPress={handleOpenPlayerScreen} 
            >
            <Image source={{uri: activeTrack.artwork}} style={styles.coverImage}/>
            <View style = {styles.titleContainer}>
                <MovingText 
                text={activeTrack?.title}
                animationThreshold={15}
                style = {styles.title}
                />
                <Text style = {styles.titleSecondary}>{activeTrack.artist}</Text>
            </View>
            <View style = {styles.playerControlContainer}>
                <PreviousButton size={iconSizes.medium}/>
                <PlayPauseButton size={iconSizes.medium}/>
                <NextButton size={iconSizes.medium}/>
            </View>
        </TouchableOpacity>
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
    sliderContainer: {
        zIndex: 1,
        position: "absolute",
        width: "100%",
        top: -5,
        left: 0,
        right: 0,
        backgroundColor: colors.backgroundPlayer,
    },
    coverImage: {
        width: 60,
        height: 60,
        resizeMode: "cover",
        borderRadius: 10,
        left: 10,
    },
    titleContainer: {
        flex: 1,
        left: 18,  
        paddingHorizontal: spacing.small,
        overflow:"hidden",
        marginLeft: spacing.small,
        marginRight: spacing.medium,
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
