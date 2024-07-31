import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { colors } from "../constants/colors";
import { fontSize, spacing } from "../constants/dimensions";
import { fontFamilies } from "../constants/fonts";
import { Slider } from "react-native-awesome-slider";
import { useSharedValue } from "react-native-reanimated";

const PlayerProggresBar = () => {

    const progress = useSharedValue(0.30);
    const min = useSharedValue(0);
    const max = useSharedValue(1);

    return (
        <View>
            <View style={styles.timeRow}>
                <Text style={styles.timeText}>00:50</Text>
                <Text style={styles.timeText}>{"-"}04:00</Text>
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
            />
        </View>  
    );
    }

export default PlayerProggresBar;

const styles = StyleSheet.create({
    timeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        //marginTop: spacing.small
    },
    timeText: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.regular,
        fontSize: fontSize.small,
        opacity: 0.75,
    },
    sliderContainer: {
        marginHorizontal: spacing.medium,
        marginVertical: 14,
    },
}) ;