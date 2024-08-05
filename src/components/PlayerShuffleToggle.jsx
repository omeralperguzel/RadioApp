import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import { colors } from '../constants/colors'
import { iconSizes } from '../constants/dimensions'
import TrackPlayer from 'react-native-track-player'

const PlayerRepeatToggle = () => {
    const shuffleSongs = async () => {
        let queue = await TrackPlayer.getQueue()
        await TrackPlayer.reset()
        queue.sort(() => Math.random() - 0.5)
        await TrackPlayer.add(queue)
        await TrackPlayer.play()
    }
    return (
        <TouchableOpacity onPress={shuffleSongs}>
            <Feather name = {"shuffle"} size = {iconSizes.medium} color = {colors.iconSecondary}/>
        </TouchableOpacity>
    )
}

export default PlayerRepeatToggle

const styles = StyleSheet.create({})
