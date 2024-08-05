import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../constants/colors'
import { iconSizes } from '../constants/dimensions'
import { RepeatMode } from 'react-native-track-player'
import { useTrackPlayerRepeatMode } from '../hooks/useTrackPlayerRepeatMode'

const repeatOrder = [RepeatMode.Off, RepeatMode.Track, RepeatMode.Queue]

const PlayerRepeatToggle = () => {
    console.log("RepeatMode.Off", RepeatMode.Off)
    const {repeatMode, changeRepeatMode } = useTrackPlayerRepeatMode()
    console.log("repeatMode: (changeRepeatMode) ", repeatMode)

    const toggleRepeatMode = () => {
        if (repeatMode == null){
            return;
        } 
        const currentIndex = repeatOrder.indexOf(repeatMode);
        console.log("currentIndex: ", currentIndex)
        console.log("repeatMode: (after currentIndex) ", repeatMode)

        const nextIndex = (currentIndex + 1) % repeatOrder.length;
        changeRepeatMode(nextIndex)
        console.log("nextIndex: ", nextIndex)
    }

    let iconName = "repeat";
    switch(repeatMode){
        case RepeatMode.Off:
            iconName = "repeat-off"
            break;
        case RepeatMode.Queue:
            iconName = "repeat"
            break;
        case RepeatMode.Track:
            iconName = "repeat-once"
            break;
        }

    return (
        <TouchableOpacity onPress={toggleRepeatMode}>
            <MaterialCommunityIcons name = {iconName} size = {iconSizes.medium} color = {colors.iconSecondary}/>
        </TouchableOpacity>
    )
}

export default PlayerRepeatToggle

const styles = StyleSheet.create({})
