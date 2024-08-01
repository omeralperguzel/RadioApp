import { TouchableOpacity } from "react-native"
import Feather from 'react-native-vector-icons/Feather'
import { iconSizes } from "../constants/dimensions"
import { colors } from "../constants/colors"

export const PreviousButton = ({size = iconSizes.large}) => {
    return(
        <TouchableOpacity activeOpacity={0.85}>
            <Feather 
            name = {"skip-back"} 
            size = {size} 
            color = {colors.iconPrimary}/>
        </TouchableOpacity>
    )
}

export const PlayPauseButton = ({size = iconSizes.large}) => {
    const isPlaying = false;
    return(
        <TouchableOpacity activeOpacity={0.85}>
            <Feather 
            name = {isPlaying ? "pause" : "play"} 
            size = {size} 
            color = {colors.iconPrimary}/>
        </TouchableOpacity>
    )
}

export  const NextButton = ({size = iconSizes.large}) => {
    return(
        <TouchableOpacity activeOpacity={0.85}>
            <Feather 
            name = {"skip-forward"} 
            size = {size} 
            color = {colors.iconPrimary}/>
        </TouchableOpacity>
    )
}


