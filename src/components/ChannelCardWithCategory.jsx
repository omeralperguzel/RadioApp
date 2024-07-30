import React from 'react';
import { FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {spacing} from '../constants/dimensions';
import ChannelCard from './ChannelCard';
import { fontSize } from '../constants/dimensions';
import { colors } from '../constants/colors';

const ChannelCardWithCategory = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.headingText}> Recommended for you </Text>
            <FlatList 
            data={[1,2,3,4,5]} 
            renderItem={ChannelCard} 
            horizontal={true}
            ItemSeparatorComponent={<View style = {{marginHorizontal: spacing.small}}/>}
            contentContainerStyle = {{paddingHorizontal: spacing.large}}
      />
        </View>
    )
}

export default ChannelCardWithCategory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headingText: {
        fontSize: fontSize.xlarge,
        color: colors.textPrimary,
        fontFamily: "Gilroy-Bold",
        paddingVertical: spacing.medium,
        paddingHorizontal: spacing.medium,
      }
});