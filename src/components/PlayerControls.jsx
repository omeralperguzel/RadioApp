import { TouchableOpacity } from "react-native"
import Feather from 'react-native-vector-icons/Feather'
import { iconSizes } from "../constants/dimensions"
import { colors } from "../constants/colors"
import TrackPlayer, { useIsPlaying } from "react-native-track-player"
import { skipToNext } from "react-native-track-player/lib/src/trackPlayer"

export const PreviousButton = ({size = iconSizes.large}) => {
    const handleGoToPrevious = async () => {
        TrackPlayer.skipToPrevious()
    }
    return(
        <TouchableOpacity activeOpacity={0.85} onPress={handleGoToPrevious}>
            <Feather 
            name = {"skip-back"} 
            size = {size} 
            color = {colors.iconPrimary}/>
        </TouchableOpacity>
    )
}

export const PlayPauseButton = ({size = iconSizes.large}) => {
    const {playing} = useIsPlaying();
    const handleTogglePlay = () => {
        if(playing){
            TrackPlayer.pause()
        } else {
            TrackPlayer.play()
        }
    }
    return(
        <TouchableOpacity activeOpacity={0.85} onPress={handleTogglePlay}>
            <Feather 
            name = {playing ? "pause" : "play"} 
            size = {size} 
            color = {colors.iconPrimary}/>
        </TouchableOpacity>
    )
}

export  const NextButton = ({size = iconSizes.large}) => {
    const handleGoToNext = async () => {
        TrackPlayer.skipToNext()
    }
    return(
        <TouchableOpacity activeOpacity={0.85} onPress={handleGoToNext}>
            <Feather 
            name = {"skip-forward"} 
            size = {size} 
            color = {colors.iconPrimary}/>
        </TouchableOpacity>
    )
}


