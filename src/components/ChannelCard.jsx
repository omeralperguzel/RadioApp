import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { fontFamilies } from '../constants/fonts';
import { fontSize, spacing } from '../constants/dimensions';
import noImage from "../../assets/images/radioappsamplechannel.png";
import TrackPlayer from 'react-native-track-player';
import songs from '../data/songs';
import { useTheme } from '@react-navigation/native';

//const imageUrl = "../../assets/images/radioappsamplechannel.png";
//             <Image source={imageUrl ? {uri: imageUrl} : require(noImage)} style={styles.coverImage}/>
const imageUrl = "https://cdn.wikirby.com/8/81/Kirby_JP_Twitter_Old_Icon.jpg";
const ChannelCard = ({item, containerStyle, imageStyle, handlePlay}) => {
    
    const {colors} = useTheme();
    /*const handlePlay = async(item) => {
        console.log("Playing: ", item.title),
        await TrackPlayer.add(item),
        await TrackPlayer.play()
    }*/
    
    return (
        <TouchableOpacity style = {[styles.container, containerStyle]} onPress={() => handlePlay(item)}>
            <Image source={{uri: item?.artwork}} style={[styles.coverImage, imageStyle]}/>
            <Text style={[styles.title, {color: colors.textPrimary}]} numberOfLines={2}> 
                {item?.title}
            </Text>
            <Text style={[styles.titleSecondary, {color: colors.textSecondary}]}>
                {item?.artist}
            </Text>
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
        fontFamily: fontFamilies.medium,
        textAlign: 'center',
        fontSize: fontSize.large,
        paddingVertical: spacing.small,
    },
    titleSecondary: {
        fontFamily: fontFamilies.regular,
        textAlign: 'center',
        fontSize: fontSize.medium,
    }
})
