import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { fontSize, spacing } from "../constants/dimensions";
import { fontFamilies } from "../constants/fonts";
import { Slider } from "react-native-awesome-slider";
import { useSharedValue } from "react-native-reanimated";
import TrackPlayer, { useProgress } from "react-native-track-player";
import { formatSecondsToMinute } from "../utils";
import { useTheme } from "@react-navigation/native";

const PlayerProgressBar = () => {

    const {colors} = useTheme();

    const {duration, position} = useProgress();
    console.log("position: (playerProgressBar) ", position)

    const progress = useSharedValue(position);
    const isSliding = useSharedValue(false);

    const min = useSharedValue(0);
    const max = useSharedValue(1);

    if(isSliding.value){
        progress.value = duration > 0 ? position / duration : 0;
    }

    const trackElapsedTime = formatSecondsToMinute(position);
    const trackRemainingTime = formatSecondsToMinute(duration - position);

    return (
        <View>
            <View style={styles.timeRow}>
                <Text style={[styles.timeText, {color: colors.textPrimary}]}>{trackElapsedTime}</Text>
                <Text style={[styles.timeText, {color: colors.textPrimary}]}>{"-"}{trackRemainingTime}</Text>
            </View>
            <Slider
            style = {styles.sliderContainer}
            containerStyle = {{
                height: 7,
                borderRadius: spacing.small,
                backgroundColor: colors.backgroundPlayer,
            }}
            theme = {{
                maximumTrackTintColor: colors.maximumTintColor,
                minimumTrackTintColor: colors.minimumTintColor,
            }}
            progress = {progress}
            minimumValue={min}
            maximumValue={max}
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
    );
    }

export default PlayerProgressBar;

const styles = StyleSheet.create({
    timeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        //marginTop: spacing.small
    },
    timeText: {
        fontFamily: fontFamilies.regular,
        fontSize: fontSize.small,
        opacity: 0.75,
    },
    sliderContainer: {
        marginHorizontal: spacing.medium,
        marginVertical: 14,
    },
}) ;