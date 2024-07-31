import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import { colors } from '../constants/colors'
import { iconSizes } from '../constants/dimensions'

const PlayerRepeatToggle = () => {
    return (
        <TouchableOpacity>
            <Feather name = {"repeat"} size = {iconSizes.medium} color = {colors.iconSecondary}/>
        </TouchableOpacity>
    )
}

export default PlayerRepeatToggle

const styles = StyleSheet.create({})
