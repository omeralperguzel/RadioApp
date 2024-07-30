import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Feather } from 'react-native-vector-icons/Feather'
import { iconSizes, spacing } from '../constants/dimensions'
import { colors } from '../constants/colors'

const Header = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
              <Feather name="menu" size={iconSizes.large} color={colors.iconPrimary} />
            </TouchableOpacity>
            <TouchableOpacity> 
              <Feather name="search" size={iconSizes.large} color={colors.iconPrimary} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: spacing.large,
      backgroundColor: colors.backgroundHeader,
      width: '100%'
    },
  })