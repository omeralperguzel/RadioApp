import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { fontFamilies } from '../constants/fonts';
import { colors } from '../constants/colors';
import { fontSize, spacing } from '../constants/dimensions';
import noImage from "../../assets/images/radioappsamplechannel.png";

//const imageUrl = "../../assets/images/radioappsamplechannel.png";
//             <Image source={imageUrl ? {uri: imageUrl} : require(noImage)} style={styles.coverImage}/>
const imageUrl = "https://cdn.wikirby.com/8/81/Kirby_JP_Twitter_Old_Icon.jpg";
const ChannelCard = ({containerStyle, imageStyle}) => {
    return (
        <TouchableOpacity style = {[styles.container, containerStyle]}>
            <Image source={{uri: imageUrl}} style={[styles.coverImage, imageStyle]}/>
            <Text style={styles.title} numberOfLines={2}>Masked Dedede - Kirby Triple Deluxe Music Extended
            </Text>
            <Text style={styles.titleSecondary}>Kirby</Text>
        </TouchableOpacity>
    )
}

export default ChannelCard;

const styles = StyleSheet.create({
    container: {
        width: 250,
        length: 250,
    },
    coverImage: {
        width: 250,
        height: 250,
        borderRadius: 10
    },
    title: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.medium,
        textAlign: 'center',
        fontSize: fontSize.large,
        paddingVertical: spacing.small,
    },
    titleSecondary: {
        color: colors.textSecondary,
        fontFamily: fontFamilies.regular,
        textAlign: 'center',
        fontSize: fontSize.medium,
    }
})
